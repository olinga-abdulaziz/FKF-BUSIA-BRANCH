import * as React from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import '../Pages/Css/manageF.css';
import axios from 'axios';
import { useState,useEffect } from 'react';

function WeekMain() {
    const location = useLocation();
    const navigate=useNavigate();

    useEffect(()=>{
        getGames()
    },[])

    const [games, setgames] = useState([]);

    function toGamePanel(week) {
        navigate('/game-panel',{state:{week:week}})
    }

    function gotoAddresult(hometeam,awayteam,id) {
        navigate('/add-result',{state:{hometeam:hometeam,awayteam:awayteam,id:id}})
    }

    function getGames() {
        axios.get(`https://busia-muslim-council.herokuapp.com/club/week/${location.state.week}`).then((res)=>{
            setgames(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }

    return(
        <div className='manageContainer'>
            <div className='container manageBox'>
                <div className='manageTopBarC'>
                    <strong> week{' '+location.state.week}</strong> 
                    <button onClick={()=>toGamePanel(location.state.week)} className='btn btn-outline-info'><i class="fa fa-plus-circle" aria-hidden="true"></i>Add Game</button>
                </div>
                <br />
                {games.map((game)=>{
                    return(
                        <article className='card cardgame' key={game._id}  onClick={()=>gotoAddresult(game.hometeam,game.awayteam,game._id)}>
                            <div className='card-header cadh0'>
                                <small className='text-muted'>Home</small>
                                <small>{game.date} | {game.stadium}</small>
                                <small className='text-muted'>Away</small>
                            </div>

                        <div className='cardgMain'>
                             <span class="badge badge-secondary"><font>{game.hometeam}</font></span>
                        
                            <span class="badge badge-success">{game.htr}</span>
                            <small>Vs</small>
                            
                            <span class="badge badge-secondary"><font>{game.awayteam}</font></span>

                            <span class="badge badge-success">{game.atr}</span>
                            
                        </div>
                        </article>
                    )
                })}
                

                
            </div>
        </div>
    )
}

export default WeekMain