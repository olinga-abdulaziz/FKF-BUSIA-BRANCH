import  './Css/Landing.css'
import {Link} from 'react-router-dom'
import axios from 'axios';
import { useState,useEffect } from 'react';
import background from '../../Images/background.jpg'
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import img3 from '../../Images/img3.jpg'
import img4 from '../../Images/img4.jpg'
import img5 from '../../Images/img5.jpg'

function Landing() {
    
useEffect(()=>{
    getGames()
},[])

const [games, setgames] = useState([]);

    function getGames() {
        console.log('started..');
        axios.get(`https://busia-muslim-council.herokuapp.com/club/week/15`).then((res)=>{
            setgames(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }
return(
        <div>
            <div className='landingBox'>
                            <br />
                            <br />
                            
                        <div id="demo" class="carousel slide" data-ride="carousel">

                            <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                            </ul>


                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className='carouImg' width='100%' height='100%' src={img1} alt="Los Angeles" />
                                    <div class="carousel-caption">
                                            <h3>Malaba Pool FC</h3>
                                            <p>We Are are the champion of football adventure</p>
                                     </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='carouImg' width='100%' height='100%' src={img4} alt="Chicago" />
                                    <div class="carousel-caption">
                                            <h3>Kabkara FC</h3>
                                            <p>Football is our Future</p>
                                     </div>
                                </div>
                                <div className="carousel-item">
                                    <img className='carouImg' width='100%' height='100%' src={img3} alt="New York" />
                                    <div class="carousel-caption">
                                            <h3>TN Legengds FC</h3>
                                            <p>We Are are the Legends of football </p>
                                     </div>
                                </div>
                            </div>

                           

                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            </a>

                        </div>


            <div className='newsBodyCover'>

                    {/* // upcoming fixtures */}

                   
                    <div className='upcomingDiv0'>
                    <div className='upHeader'>
                        <strong>Upcomming Matches</strong>
                        <small>Week 15</small>
                    </div>
                    <div className='upbody'>
                        {games.map((game)=>{
                            return(
                                <article className='upMatchItem'>
                                <header>
                                    <strong>HOME</strong>
                                    <small>Sun. {game.date} {game.time} </small>
                                    <strong>Away</strong>
                                </header>
                                <hr/>
                                <footer>
                                    <div className='footfDiv1'>
                                        <small>{game.hometeam}</small>
                                    </div>
                                    <div className='footfDiv2'>
                                        <center><strong>Vs</strong></center>
                                        <div className='timeVenue'>
                                            <center>
                                            <small>{game.stadium}</small>
                                            </center>
                                        </div>
                                    </div>
                                    <div className='footfDiv3'>
                                        <small>{game.awayteam}</small>
                                    </div>
                                </footer>
                                </article>
                            )                                                              
                        })}
                        <div style={{width:'100%'}}>
                            <img src='https://kol.jumia.com/banners/4KGCXsgo5buixQ3gB46p6IlKm04OEtVGtzHr3pVc.jpeg' width='100%' height='100%' />
                        </div>
                    </div>
                </div>


                    {/* // upcoming fixtures */}

                    <div className='playerStats0'>
                        <div className='statsHead0'>
                            <strong className='statsTitle0'>FOOTBAL NEWS</strong>
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                         <small className='text-muted'>Vihiga Queens crowned CAF Women Champions League CECAFA qualifiers champions</small>
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                         <small className='text-muted'>Vihiga Queens crowned CAF Women Champions League CECAFA qualifiers champions</small>
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                         <small className='text-muted'>Vihiga Queens crowned CAF Women Champions League CECAFA qualifiers champions</small>
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                         <small className='text-muted'>Vihiga Queens crowned CAF Women Champions League CECAFA qualifiers champions</small>
                        </div>
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Landing