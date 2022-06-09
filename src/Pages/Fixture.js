import '../Pages/Css/fixtures.css';
import fkflogo from '../Images/fkflogo.png'
import { Link,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';


function Fixtures() {

    const navigate = useNavigate();
    
    useEffect(()=>{
        FetchWeeks()
    },[])

    function toWeekMain(week){
        navigate('/week-main',{state:{week:week}});
    }

    const [weeksData, setweeksData] = useState([]);

   
    function FetchWeeks() {
        axios.get('https://busia-muslim-council.herokuapp.com/club/weeks').then((res)=>{
            let myresults=res.data
            setweeksData(myresults)

        }).catch((err)=>{
            console.log(err);
        })
    }


    return (
<div className="containeri">
<br />
<br />
<div className='CLhead clh11'>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h6 style={{fontWeight:'10'}}>Teso North Sub-county Fixtures 2022/2023</h6>
                    <p className='text-muted'>The table below consist of Teso north fixtures per week</p>
                </div>
            </div>
</div>
<section className='fixtContDiv'>           
    <div className='fixturesDiv'>
        

        {weeksData.map((week)=>{
                    return(
                        <article key={week.id} onClick={()=>toWeekMain(week.week)} className='weekBox btn btn-outline-info'>
                            <i className="fa fa-calendar" aria-hidden="true"></i>
                            <small>week {' '+week.week}</small>
                            <i className="fa fa-eye" aria-hidden="true"></i>
                        </article>
                    )
        })}
              
</div>
</section>
        </div>
    )
}


export default Fixtures;