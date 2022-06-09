import * as React from 'react'
import { Link } from 'react-router-dom'
import './Css/admin.css'
import { useState,useEffect } from 'react'
import { authentication } from '../Files/Firebase'

import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios'


function Register() {

    useEffect(()=>{
        GetVerificationCode()
    },[])

    const [Names, setNames] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [Verification, setVerification] = useState("");
    const [Password, setPassword] = useState("");
    const [Cpassword, setCpassword] = useState();
    const [isValid, setisValid] = useState("");
    const [passErrorMessage, setpassErrorMessage] = useState("");
    const [ver, setver] = useState("");
    const [btnText, setbtnText] = useState("Sign Up");

    function GetVerificationCode() {
        axios.get('https://busia-muslim-council.herokuapp.com/auth').then((res)=>{
            let myCode=res.data
            setver(myCode.code)
        })
    }

    function RegisterUser() {
        setbtnText("please wait ...")
        if (Verification == ver) {
            if (Names == '' || Phone==''|| Email==''|| Verification==''|| Cpassword==''|| Password=='') {
                setisValid("is-invalid")
                return
            }else if (!Password==Cpassword ) {
                console.log('password did not match');
                setisValid("is-invalid")
                return
            }else{        
                createUserWithEmailAndPassword(authentication,Email,Password).then((re)=>{
                    axios.post('https://busia-muslim-council.herokuapp.com/auth/register',{
                        names:Names,
                        phone:Phone,
                        email:Email,
                        password:Password
                    }).then((res)=>{
                        setbtnText("Sign Up")
                        window.location.href("/control-panel")
                    })
                }).catch((re)=>{
                    console.log(re);
                })
            }
        }else{   
            return
        }
      

            
        
    }
    return(
        <div className='container adminConatiner'>
            <form className='login-section'>
                <h4>Create New Account</h4>
                <label for="inputName">Full Names</label>
                <input value={Names} onChange={(element)=>setNames(element.target.value)} type="text" className={`form-control ${isValid}`} name="inputName" id="inputName" />
                
                <br />
                <label for="inputName">Phone Number</label>
                <input value={Phone} onChange={(element)=>setPhone(element.target.value)} type="text" className={`form-control ${isValid}`} name="inputName" id="inputName" />
               
                <br />
                <label for="inputName">Email</label>
                <input value={Email} onChange={(element)=>setEmail(element.target.value)} type="text" className={`form-control ${isValid}`} name="inputName" id="inputName" />
                
                <br />
                <label for="inputName">Verification Code</label> <br />
                <small className='text-muted'>Provide verification code from the <i>super admin</i></small>
                <input value={Verification} onChange={(element)=>setVerification(element.target.value)} type="text" className={`form-control ${isValid}`} name="inputName" id="inputName" />
               
                <br />
                <label for="inputName">Password</label>
                <input value={Password} onChange={(element)=>setPassword(element.target.value)} type="text" className={`form-control ${isValid}`} name="inputName" id="inputName" />
                
                <br />
                <label  for="inputName">Confirm Password</label>
                <input value={Cpassword}  onChange={(element)=>setCpassword(element.target.value)} type="text" className={`form-control ${isValid}`} name="inputName" id="inputName" />
             

                <br />
                <input type='button' onClick={()=>RegisterUser()} value={btnText} className='btn btn-secondary form-control' />
                <br />
                <br />
                <center><a href='#' >forgot password</a></center> 
                <br />
                <br />
                <center>Do you Already  have an account ? <Link to='/admin'>Login</Link></center>
            </form>
        </div>
    )
}


export default Register