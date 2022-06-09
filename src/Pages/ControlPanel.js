import * as React from 'react'
import './Css/admin.css'
import { authentication } from '../Files/Firebase'
import { useState,useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import axios from 'axios'

function ControlPanel() {
    const [weeksData, setweeksData] = useState([]);
    const [theweek, settheweek] = useState("");
    useEffect(()=>{
        checkIfUserIsLogedIn()
        FetchWeeks()
    },[])
     
    const checkIfUserIsLogedIn=()=>{
        onAuthStateChanged(authentication,(user)=>{
            if(user){
                return
            }else{
                window.location.href='/admin'
                return
            }
        })
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
        <div className='container adminConatiner'>
          
            <header className='cntHeadr'>
                <div><strong><i class="fas fa-tools"></i> Control Panel</strong></div>
                <div><strong><i class="fas fa-user-shield"></i> Official Admin</strong></div>
            </header>
            <section className='cntrBody'>
                <h3>As Administrator you are capable of performing various tasks :</h3>
                <small className='txt-muted'>You also have access to some previlages that a normal user does not have</small>
                <br />
                <br />
                <div className='btn-group'>
                    <button onClick={()=>window.location.href='/add-club'} className='btn btn-outline-secondary'>Register New Club</button>
                    <button  onClick={()=>window.location.href='/manage-fixture'} className='btn btn-outline-secondary'>Manage Fixtures</button>
                </div>
                <br />
                <br />
                <br />

                <form>
                    <div class="form-group">
                    <div className="form-group">
                      <label for="" className='text-muted'>Show Results for this week</label>
                      <div style={{display:'flex'}}>
                      <select value={theweek} onChange={(event)=>settheweek(event.target.value)} style={{width:'70px'}} className="form-control" name="stadium" id="stadium">
                      <option>{theweek}</option>
                      {weeksData.map((item)=>{
                              return(
                                <option key={item._id}>{item.week}</option>
                              )
                          })}
                      </select>
                      <input type='button' className='btn btn-secondary' style={{marginLeft:'10px'}} value='Save'/>
                      </div>
                    </div>
                    </div>
                </form>
            </section>
        </div>
    )
}

export default ControlPanel