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
   
    const checkIfUserIsLogedIn=()=>{
        onAuthStateChanged(authentication,(user)=>{
            if(user){
                window.location.href='/control-panel'
                return
            }else{
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
                <input type="email" className={`form-control ${isValid}`}onChange={(element)=>setEmail(element.target.value)} name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>
                <br />
                <label for="inputName">Password</label>
                <input type="password" className={`form-control ${isValid}`} onChange={(element)=>setPassword(element.target.value)} name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
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
}


export default Admin