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
  
    axios.get(`https://busia-muslim-council.herokuapp.com/club/week/15`).then((res)=>{
        setgames(res.data)
    }).catch((err)=>{
        console.log(err);
    })
}
    return(
        <div className='Lbox'>
            <br />
            <div className='LLhead'>
            <h6 style={{fontWeight:'10'}}>Results <strong>Week 15</strong></h6>
          
            </div>
            <div style={{width:'100%'}}>
            <a href='https://kol.jumia.com/api/click/link/d884787d-e6bd-4979-8f7e-7cd224451b46/11ca45e2-40bf-48c8-adc7-4926691f1c05'>                            <img src='https://kol.jumia.com/banners/4KGCXsgo5buixQ3gB46p6IlKm04OEtVGtzHr3pVc.jpeg' width='100%' height='100%' /></a>

            </div>
   

            <div className='LLBody'>
                <div className='manageTopBarC'>
                     
                </div>
          
                {games.map((game)=>{
                    return(
                        <article className='card cardgame' key={game._id}  >
                            <div className='card-header cadh0'>
                                <small className='text-muted'>Home</small>
                                <small className='text-muted'>{game.date} | {game.stadium}</small>
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

    
    // function LoadingBox() {
    //     return(
    //         <div className='loading' style={{display:loadingDisplay}}>
    //             <center>
    //             <div class="lds-facebook"><div></div><div></div><div></div></div>
    //             </center>    
    //         </div>
    //     )
    // }
}

export default Results