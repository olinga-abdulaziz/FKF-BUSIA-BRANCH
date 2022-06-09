import playercss from './Css/results.css'
import { Link,useLocation,useNavigate } from 'react-router-dom'
import fkflogo from '../Images/fkflogo.png'
import axios from 'axios';
import { useState,useEffect } from 'react';



function Results() {
   
    
const location = useLocation();
const navigate=useNavigate();



useEffect(()=>{
    getGames()
},[])

const [games, setgames] = useState([]);


function getGames() {
  
    axios.get(`https://busia-muslim-council.herokuapp.com/club/week/1`).then((res)=>{
        setgames(res.data)
    }).catch((err)=>{
        console.log(err);
    })
}
    return(
        <div className='Lbox'>
            <br />
            <div className='LLhead'>
                <strong>WEEK 13 RESULTS</strong>
            </div>

            <div className='LLBody'>
                <div className='manageTopBarC'>
                     
                </div>
          
                {games.map((game)=>{
                    return(
                        <article className='card cardgame' key={game._id}  >
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

export default Results