import * as React from 'react'
import { Link,useLocation } from 'react-router-dom';
import '../Pages/Css/manageF.css';
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function GameFix() {
  const location=useLocation()

    const [clubsData, setclubsData] = useState([]);
    useEffect(()=>{
        getClubs()
    },[])

    const [hometea, sethometeam] = useState("");
    const [awayteam, setawayteam] = useState("");
    const [stadium, setstadium] = useState("");
    const [date, setdate] = useState("");
    const [time, settime] = useState("");

    const [btnText, setbtnText] = useState("submit");

    function getClubs() {
        axios.get('https://busia-muslim-council.herokuapp.com/club/clubs').then((response)=>{
            const clubsArray=response.data
            setclubsData(clubsArray)
           
        })
    }

   

    function AddGame() {
      console.log("rada ni gani na hii nayo");
      // setbtnText("Please wait ...")

      // axios.post('https://busia-muslim-council.herokuapp.com/club/add-game',{
      //   week:location.state.week,
      //   hometeam:hometea,
      //   awayteam:awayteam,
      //   stadium:stadium,
      //   date:date,
      //   time:time,
      // }).then((res)=>{
      //   setbtnText("Submit")
      //   sethometeam("")
      //   setawayteam("")
      //   settime("")
      //   setstadium("")
      //   setdate("")
      // })

    }
    return(
        <div className='manageContainer'>
            <div className='container manageBox'>
                <div className='manageTopBarC'>
                    <strong>Game Panel</strong> 
                    
                </div>
                <br />
                <form >
                    <div class="form-group">
                      <label for="">Home Team</label>
                      <select onChange={(event)=>sethometeam(event.target.value)} class="form-control" name="hometeam" id="hometeam">
                          {clubsData.map((item)=>{
                              return(
                                <option key={item._id}>{item.clubname}</option>
                              )
                          })}
                        
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="">Away Team</label>
                      <select onChange={(event)=>setawayteam(event.target.value)} class="form-control" name="awayteam" id="awayteam">
                      {clubsData.map((item)=>{
                              return(
                                <option key={item._id}>{item.clubname}</option>
                              )
                          })}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="">Stadium</label>
                      <select onChange={(event)=>setstadium(event.target.value)} class="form-control" name="stadium" id="stadium">
                      {clubsData.map((item)=>{
                              return(
                                <option key={item._id}>{item.stadium}</option>
                              )
                          })}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="">Date</label>
                      <input type="text"
                      onChange={(event)=>setdate(event.target.value)}
                        class="form-control" name="date" id="date" aria-describedby="helpId" placeholder="eg. 2/4/2022" />
                    </div>
                    <div class="form-group">
                      <label for="">Time</label>
                      <input type="text"
                      onChange={(event)=>settime(event.target.value)}
                        class="form-control" name="time" id="time" aria-describedby="helpId" placeholder="eg. 1:00 pm" />
                    </div>
                    <button  className='btn btn-info form-control'>{btnText}</button>
                </form>
                
            </div>
        </div>
    )
}

export default GameFix