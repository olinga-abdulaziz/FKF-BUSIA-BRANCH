import * as React from 'react'
import { Link } from 'react-router-dom'
import './Css/admin.css'
import { useState } from 'react'
import { authentication } from '../Files/Firebase'

import { createUserWithEmailAndPassword } from "firebase/auth";
import axios from 'axios'


function Register() {

    const [Names, setNames] = useState("");
    const [Phone, setPhone] = useState("");
    const [Email, setEmail] = useState("");
    const [Verification, setVerification] = useState("");
    const [Password, setPassword] = useState("");
    const [Cpassword, setCpassword] = useState();


    function RegisterUser() {
        console.log(Names);
        // createUserWithEmailAndPassword(authentication,Email,Password).then((re)=>{

        //     // if (Names || Phone || Email || Verification || Password || Cpassword == null) {
        //     //     return
        //     // }else if (!Password==Cpassword ) {
        //     //     return
        //     // }else{}
        //     // axios.post('https://busia-muslim-council.herokuapp.com/auth/register',{
        //     //     names:Names,
        //     //     phone:Phone,
        //     //     email:Email,
        //     //     password:Password
        //     // }).then((res)=>{
        //     //     console.log("registerd successfully");
        //     // })
        // }).catch((re)=>{
        //     console.log(re);
        // })
        
    }
    return(
        <div className='container adminConatiner'>
            <form className='login-section'>
                <h4>Create New Account</h4>
                <label for="inputName">Full Names</label>
                <input value={Names} onChange={(element)=>setNames(element.target.value)} type="text" className="form-control " name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>
                <br />
                <label for="inputName">Phone Number</label>
                <input value={Phone} onChange={(element)=>setPhone(element.target.value)} type="text" className="form-control " name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>
                <br />
                <label for="inputName">Email</label>
                <input value={Email} onChange={(element)=>setEmail(element.target.value)} type="text" className="form-control " name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>
                <br />
                <label for="inputName">Verification Code</label> <br />
                <small className='text-muted'>Provide verification code from the <i>super admin</i></small>
                <input value={Verification} onChange={(element)=>setVerification(element.target.value)} type="text" className="form-control " name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>
                <br />
                <label for="inputName">Password</label>
                <input value={Password} onChange={(element)=>setPassword(element.target.value)} type="text" className="form-control " name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>
                <br />
                <label  for="inputName">Confirm Password</label>
                <input value={Cpassword}  onChange={(element)=>setCpassword(element.target.value)} type="text" className="form-control " name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>

                <br />
                <input type='button' onClick={()=>RegisterUser()} value='Login' className='btn btn-secondary form-control' />
                <br />
                <br />
                <center><a href='#' >forgot password</a></center> 
                <br />
                <br />
                <center>Are you have an account ? <Link to='/admin'>Login</Link></center>
            </form>
        </div>
    )
}


export default Register