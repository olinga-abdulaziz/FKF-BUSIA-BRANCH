import axios from 'axios';
import * as React from 'react'
import { Link } from 'react-router-dom';
import '../Pages/Css/manageF.css';
import { useState } from 'react';


function ManageFixture() {
    const [week, setweek] = useState("");
    const [displayt, setdisplayt] = useState("none");
    const [messageDisplay, setmessageDisplay] = useState("none");

    function AddWeek() {
        console.log("script started");
        if (week == "") {
            return
        }else{
        setdisplayt("block")
        axios.post('https://busia-muslim-council.herokuapp.com/club/add-week',{
            week:week
        }).then((req,res)=>{
            setdisplayt("none")
            setweek("")
            setmessageDisplay("block")
        }).catch((err)=>{
            console.log(err);
        })
    }
    }



    return(
        <div className='manageContainer'>
            <div className='container manageBox'>
                <div className='manageTopBarC'>
                    <strong>Manage Weeks</strong>  
                </div>
                <br />
                <br />
                <article className='weekBox1'>
                    <form>
                        <div className='form-group wkfg d-flex'>
                            <input type='text' className='form-control' required placeholder='eg. week 9' onChange={(event=>setweek(event.target.value))}/>
                            <button type='submit' className='btn btn-outline-info' onClick={AddWeek}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                        </div>
                    </form>
                    <div className="spinner-border text-dark spn1" style={{display:displayt}}></div>

                    <div className="alert alert-success alert-dismissible" style={{display:messageDisplay}}>
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Success!</strong> Week added successfully !
                    </div>
                </article>

                <Link to='/week-main'>
                    <article className='weekBox btn btn-outline-info'>
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                        <small>Week 1</small>
                        <i className="fa fa-eye" aria-hidden="true"></i>
                    </article>
                </Link>
                <article className='weekBox btn btn-outline-info'>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                    <small>Week 2</small>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                </article>
                <article className='weekBox btn btn-outline-info'>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                    <small>Week 3</small>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                </article>
                <article className='weekBox btn btn-outline-info'>
                <i className="fa fa-calendar" aria-hidden="true"></i>
                    <small>Week 4</small>
                    <i className="fa fa-eye" aria-hidden="true"></i>
                </article>
                
            </div>
        </div>
    )
}

export default ManageFixture