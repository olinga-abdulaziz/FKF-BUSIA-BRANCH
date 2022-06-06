import * as React from 'react'
import { Link } from 'react-router-dom';
import '../Pages/Css/manageF.css';
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react';

function GameFix() {
    const [clubsData, setclubsData] = useState([]);
    useEffect(()=>{
        getClubs()
    },[])
    function getClubs() {
        axios.get('https://busia-muslim-council.herokuapp.com/club/clubs').then((response)=>{
            const clubsArray=response.data
            setclubsData(clubsArray)
           
        })
    }
    return(
        <div className='manageContainer'>
            <div className='container manageBox'>
                <div className='manageTopBarC'>
                    <strong>Game Panel</strong> 
                </div>
                <br />
                <form>
                    <div class="form-group">
                      <label for="">Home Team</label>
                      <select class="form-control" name="" id="">
                          {clubsData.map((item)=>{
                              return(
                                <option>{item.clubname}</option>
                              )
                          })}
                        
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="">Away Team</label>
                      <select class="form-control" name="" id="">
                      {clubsData.map((item)=>{
                              return(
                                <option>{item.clubname}</option>
                              )
                          })}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="">Stadium</label>
                      <select class="form-control" name="" id="">
                      {clubsData.map((item)=>{
                              return(
                                <option>{item.stadium}</option>
                              )
                          })}
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="">Date</label>
                      <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="eg. 2/4/2022" />
                    </div>
                    <div class="form-group">
                      <label for="">Time</label>
                      <input type="text"
                        class="form-control" name="" id="" aria-describedby="helpId" placeholder="eg. 1:00 pm" />
                    </div>
                    <button className='btn btn-info form-control'>Submit</button>
                </form>
                
            </div>
        </div>
    )
}

export default GameFix