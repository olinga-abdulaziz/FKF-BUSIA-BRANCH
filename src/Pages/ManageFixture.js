import axios from 'axios';
import * as React from 'react'
import { Link,useNavigate } from 'react-router-dom';
import '../Pages/Css/manageF.css';
import { useState,useEffect } from 'react';


function ManageFixture() {
    const navigate = useNavigate();

    

    useEffect(() => {
        FetchWeeks()
    }, []);

    const [week, setweek] = useState("");
    const [displayt, setdisplayt] = useState("none");
    const [messageDisplay, setmessageDisplay] = useState("none");
    const [weeksData, setweeksData] = useState([]);

    function toWeekMain(week){
        navigate('/week-main',{state:{week:week}});
    }

    function AddWeek() {
        console.log("script started");
        if (week == "") {
            return
        }else{
        setdisplayt("block")

        axios.post('https://busia-muslim-council.herokuapp.com/club/add-week',{
            week:week,
        }).then((req,res)=>{
            setweek("")
            setmessageDisplay("block")
            setdisplayt("none")
            FetchWeeks()
            setmessageDisplay("block")
        }).catch((err)=>{
            console.log(err);
        })
    }
    }

    function FetchWeeks() {
        axios.get('https://busia-muslim-council.herokuapp.com/club/weeks').then((res)=>{
            let myresults=res.data
            setweeksData(myresults)

        }).catch((err)=>{
            console.log(err);
        })
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
                            <button type='button' className='btn btn-outline-info' onClick={AddWeek}><i class="fa fa-plus-circle" aria-hidden="true"></i></button>
                        </div>
                    </form>
                    <div className="spinner-border text-dark spn1" style={{display:displayt}}></div>

                    <div className="alert alert-success alert-dismissible" style={{display:messageDisplay}}>
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Success!</strong> Week added successfully !
                    </div>
                </article>
                {weeksData.map((week)=>{
                    return(
                        <article key={week.id} onClick={()=>toWeekMain(week.week)} className='weekBox btn btn-outline-info'>
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                            <small>{week.week}</small>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                        </article>
                    )
                })}
                               
            </div>
        </div>
    )
}

export default ManageFixture