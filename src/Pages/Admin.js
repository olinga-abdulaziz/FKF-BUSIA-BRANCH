import * as React from 'react'
import { Link } from 'react-router-dom'
import './Css/admin.css'


function Admin() {
    function Login(){
        window.location.href='/control-panel'
    }
    return(
        <div className='container adminConatiner'>
            <form className='login-section'>
                <h4>Authorized Access <i class="far fa-lock-alt"></i></h4>
                <label for="inputName">Email</label>
                <input type="text" className="form-control " name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>
                <br />
                <label for="inputName">Password</label>
                <input type="text" className="form-control " name="inputName" id="inputName" />
                <div className="invalid-feedback">
                    Validation message
                </div>
                <br />
                <input type='button' onClick={()=>Login()} value='Login' className='btn btn-secondary form-control' />
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