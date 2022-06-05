import  './Css/Landing.css'
import {Link} from 'react-router-dom'

import background from '../../Images/background.jpg'
import img1 from '../../Images/img1.jpg'
import img2 from '../../Images/img2.jpg'
import img3 from '../../Images/img3.jpg'
import img4 from '../../Images/img4.jpg'
import img5 from '../../Images/img5.jpg'

function Landing() {

    return(
        <div>
            <div className='landingBox'>

                        <div id="demo" class="carousel slide" data-ride="carousel">

                            <ul class="carousel-indicators">
                            <li data-target="#demo" data-slide-to="0" className="active"></li>
                            <li data-target="#demo" data-slide-to="1"></li>
                            <li data-target="#demo" data-slide-to="2"></li>
                            </ul>


                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img width='100%' height='100%' src={img1} alt="Los Angeles" />
                            </div>
                            <div className="carousel-item">
                                <img width='100%' height='100%' src={img4} alt="Chicago" />
                            </div>
                            <div className="carousel-item">
                                <img width='100%' height='100%' src={img3} alt="New York" />
                            </div>
                            </div>

                            
                            <center className='landface'>
                            <h2>Teso north fooltball federation</h2>
                            <p>forwad always and backward never is our slogan,Teso north legends football club. we are the champions.forwad always and backward never is our slogan,Teso north legends football club. we are the champions.forwad always and backward never is our slogan</p>
                                <div>
                                <Link to='/table'><button className='btnViewTable'>View Table</button></Link>   
                                    <a href='#landingnews'><button className='btnGetStarted'>Get Started</button></a>
                                </div>
                            </center>

                            <a className="carousel-control-prev" href="#demo" data-slide="prev">
                            <span className="carousel-control-prev-icon"></span>
                            </a>
                            <a className="carousel-control-next" href="#demo" data-slide="next">
                            <span className="carousel-control-next-icon"></span>
                            </a>

                        </div>


                <div className='newsBodyCover'>
                    <div className='playerStats'>
                        <div className='statsHead'>
                            <strong className='statsTitle'>FKF NOTICE</strong>
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                        Vihiga Queens crowned CAF Women Champions League CECAFA qualifiers champions
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                        Vihiga Queens, CBE FC to battle it out in CAF Women Champions League CECAFA Qualifiers
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                        Harambee Stars coach Engin Firat has named James Saruni and Abud Omar in the starting lineup for today’s 2022 FIFA World Cup Qualifier against Rwanda. [...] Read More
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                        Vihiga Queens crowned CAF Women Champions League CECAFA qualifiers champions
                        </div>

                        <div className='statBody2'>
                        <strong>CAF WOMEN CHAMPIONS LEAGUE</strong> <br />
                        Vihiga Queens crowned CAF Women Champions League CECAFA qualifiers champions
                        </div>

                        
                </div>
                
            </div>
        </div>
    </div>
    )
}

export default Landing