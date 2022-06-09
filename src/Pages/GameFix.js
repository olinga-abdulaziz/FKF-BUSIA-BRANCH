import * as React from 'react'
import { Link,useLocation } from 'react-router-dom';
import '../Pages/Css/manageF.css';
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function GameFix() {
  const location=useLocation()
    const [week, setweek] = useState("");

    const [clubsData, setclubsData] = useState([]);
    useEffect(()=>{
        getClubs()
        setweek(location.state.week)
    },[])

    const [hometeam, sethometeam] = useState("");
    const [awayteam, setawayteam] = useState("");
    const [stadium, setstadium] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("");
    const [messageDisplay, setmessageDisplay] = useState("none");

    const [btnText, setbtnText] = useState("submit");

    function getClubs() {
        axios.get('https://busia-muslim-council.herokuapp.com/club/clubs').then((response)=>{
            const clubsArray=response.data
            setclubsData(clubsArray)
           
        })
    }

   

    function AddGame() {
      setbtnText("Please wait ...")
 
      axios.post('https://busia-muslim-council.herokuapp.com/club/add-game',{
        week:week,
        hometeam:hometeam,
        awayteam:awayteam,
        stadium:stadium,
        date:date,
        time:time,
        htr:0,
        atr:0
      }).then((res)=>{
        setmessageDisplay("block")
        sethometeam("")
        setawayteam("")
        settime("")
        setstadium("")
        setdate("")
        setbtnText("Submit")
      }).catch((err)=>{
        console.log(err);
      })

    }
    return(
        <div className='manageContainer'>
         
            <div className='container manageBox'>
                <div className='manageTopBarC'>
                    <strong>Game Panel</strong> 
                    week {' '+week}
                </div>
                <br />
                <form >
                    <div className="form-group">
                      <label for="">Home Team</label>
                      <select  value={hometeam} onChange={(event)=>sethometeam(event.target.value)} className="form-control" name="hometeam" id="hometeam">
                        <option></option>
                          {clubsData.map((item)=>{
                              return(
                                  <option key={item._id}>{item.clubname}</option>
                              )
                          })}
                        
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="">Away Team</label>
                      <select value={awayteam} onChange={(event)=>setawayteam(event.target.value)} className="form-control" name="awayteam" id="awayteam">
                      <option></option>
                      {clubsData.map((item)=>{
                              return(
                                <option key={item._id}>{item.clubname}</option>
                              )
                          })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="">Stadium</label>
                      <select value={stadium} onChange={(event)=>setstadium(event.target.value)} className="form-control" name="stadium" id="stadium">
                      <option></option>
                      {clubsData.map((item)=>{
                              return(
                                <option key={item._id}>{item.stadium}</option>
                              )
                          })}
                      </select>
                    </div>
                    <div className="form-group">
                      <label for="">Date</label>
                      <input type="text" value={date}
                      onChange={(event)=>setdate(event.target.value)}
                        className="form-control" name="date" id="date" aria-describedby="helpId" placeholder="eg. 2/4/2022" />
                    </div>
                    <div className="form-group">
                      <label for="">Time</label>
                      <input type="text" value={time}
                      onChange={(event)=>settime(event.target.value)}
                        className="form-control" name="time" id="time" aria-describedby="helpId" placeholder="eg. 1:00 pm" />
                    </div>
                    <input type='button' onClick={AddGame}  className='btn btn-info form-control'  value={btnText}/>
                </form>
                <br />
                <br />
                <div className="alert alert-success alert-dismissible" style={{display:messageDisplay}}>
                        <button type="button" className="close" data-dismiss="alert">&times;</button>
                        <strong>Success!</strong> Game added successfully !
                    </div>
            </div>
        </div>
    )
}

export default GameFix