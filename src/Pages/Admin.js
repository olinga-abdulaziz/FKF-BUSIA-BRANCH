import * as React from 'react'
import { Link } from 'react-router-dom'
import './Css/admin.css'
import { authentication } from '../Files/Firebase'
import { useState,useEffect } from 'react'
import { signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";

function Admin() {
    

    useEffect(()=>{
        checkIfUserIsLogedIn()
    },[])

    
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [isValid, setisValid] = useState("");
    const [btnText, setbtnText] = useState("Login");
    const [isLoading, setisLoading] = useState(true);
    const [loadingDisplay, setloadingDisplay] = useState("block");
   
    const checkIfUserIsLogedIn=()=>{
        onAuthStateChanged(authentication,(user)=>{
            if(user){
                window.location.href='/control-panel'
                setisLoading(false)
                setloadingDisplay("none")
                return
            }else{
                setisLoading(false)
                setloadingDisplay("none")
                return
            }
        })
    }


    function Login(){
        setbtnText("Please wait ...")
        if (Email=='' || Password=='') {
            setisValid("is-invalid")  
            setbtnText("Login")
        }

        signInWithEmailAndPassword(authentication,Email,Password).then((res)=>{
            window.location.href='/control-panel'
        }).catch((err)=>{
            setbtnText("Login")
            setEmail("")
            setPassword("")
            console.log(err);
        })
        
    }

 
    return(
        <div className='container adminConatiner'>
            <form className='login-section'>
                <h4>Authorized Access <i class="far fa-lock-alt"></i></h4>
                <label for="inputName">Email</label>
                <input value={Email} onChange={((text)=>setEmail(text.target.value))} type="email" className={`form-control ${isValid}`}  name="Email" id="inputName" />
                <div className="invalid-feedback">
                    Validation failed {Email}
                </div>
                <br />
                <label for="inputName">Password</label>
                <input  type="password" className={`form-control ${isValid}`} onChange={((text)=>setPassword(text.target.value))}  name="Password" id="Password" />
                <div className="invalid-feedback">
                    Validation failed
                </div>
                <br />
                <input type='button'  onClick={()=>Login()} value={btnText} className='btn btn-secondary form-control' />
                <br />
                <br />
                <center><a href='#' >forgot password</a></center> 
                <br />
                <br />
                <center>Are you a new admin ? <Link to='/new-account'>Create account</Link></center> 
            </form>
        </div>
    )

    function LoadingBox() {
        return(
            <div className='loading' style={{display:loadingDisplay}}>
                <center>
                <div class="lds-facebook"><div></div><div></div><div></div></div>
                </center>    
            </div>
        )
    }
}


export default Admin