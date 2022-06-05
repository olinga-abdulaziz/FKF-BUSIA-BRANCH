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
                        <small>Week 13</small>
                    </div>
                    <div className='upbody'>
                        <article className='upMatchItem'>
                            <header>
                                <strong>HOME</strong>
                                <small>Sat. 12/May 1:10am </small>
                                <strong>Away</strong>
                            </header>
                            <hr/>
                            <footer>
                                <div className='footfDiv1'>
                                    <small>Sokopaka Fc</small>
                                </div>
                                <div className='footfDiv2'>
                                   <center><strong>Vs</strong></center>
                                   <div className='timeVenue'>
                                        <center>
                                        <small>Amoni pri.</small>
                                        </center>
                                   </div>
                                </div>
                                <div className='footfDiv3'>
                                    <small>Kabkara Fc</small>
                                </div>
                            </footer>
                        </article>

                        <article className='upMatchItem'>
                            <header>
                                <strong>HOME</strong>
                                <small>Sat. 12/May 1:10am </small>
                                <strong>Away</strong>
                            </header>
                            <hr/>
                            <footer>
                                <div className='footfDiv1'>
                                    <small>Kakurkit Bullets</small>
                                </div>
                                <div className='footfDiv2'>
                                   <center><strong>Vs</strong></center>
                                   <div className='timeVenue'>
                                        <center>
                                        <small>Kakurkit pri.</small>
                                        </center>
                                   </div>
                                </div>
                                <div className='footfDiv3'>
                                    <small>Aboloi Fc</small>
                                </div>
                            </footer>
                        </article>

                        <article className='upMatchItem'>
                            <header>
                                <strong>HOME</strong>
                                <small>Sun. 13/May 1:10am </small>
                                <strong>Away</strong>
                            </header>
                            <hr/>
                            <footer>
                                <div className='footfDiv1'>
                                    <small>Homeboys Fc</small>
                                </div>
                                <div className='footfDiv2'>
                                   <center><strong>Vs</strong></center>
                                   <div className='timeVenue'>
                                        <center>
                                        <small>Malaba Stadium.</small>
                                        </center>
                                   </div>
                                </div>
                                <div className='footfDiv3'>
                                    <small>Koruruma Fc</small>
                                </div>
                            </footer>
                        </article>


                        <article className='upMatchItem'>
                            <header>
                                <strong>HOME</strong>
                                <small>Sun. 13/May 1:10am </small>
                                <strong>Away</strong>
                            </header>
                            <hr/>
                            <footer>
                                <div className='footfDiv1'>
                                    <small>Korisai Fc</small>
                                </div>
                                <div className='footfDiv2'>
                                   <center><strong>Vs</strong></center>
                                   <div className='timeVenue'>
                                        <center>
                                        <small>Korisai pri.</small>
                                        </center>
                                   </div>
                                </div>
                                <div className='footfDiv3'>
                                    <small>Kabkara Fc</small>
                                </div>
                            </footer>
                        </article>


                        <article className='upMatchItem'>
                            <header>
                                <strong>HOME</strong>
                                <small>Sun. 13/May 1:10am </small>
                                <strong>Away</strong>
                            </header>
                            <hr/>
                            <footer>
                                <div className='footfDiv1'>
                                    <small>Pool Fc</small>
                                </div>
                                <div className='footfDiv2'>
                                   <center><strong>Vs</strong></center>
                                   <div className='timeVenue'>
                                        <center>
                                        <small>Malaba Stadium.</small>
                                        </center>
                                   </div>
                                </div>
                                <div className='footfDiv3'>
                                    <small>Okuleu Fc</small>
                                </div>
                            </footer>
                        </article>


                        <article className='upMatchItem'>
                            <header>
                                <strong>HOME</strong>
                                <small>Sun. 13/May 1:10am </small>
                                <strong>Away</strong>
                            </header>
                            <hr/>
                            <footer>
                                <div className='footfDiv1'>
                                    <small>Adanya Fc</small>
                                </div>
                                <div className='footfDiv2'>
                                   <center><strong>Vs</strong></center>
                                   <div className='timeVenue'>
                                        <center>
                                        <small>Adanya Pri.</small>
                                        </center>
                                   </div>
                                </div>
                                <div className='footfDiv3'>
                                    <small>Akobwait Stars Fc</small>
                                </div>
                            </footer>
                        </article>

                        <article className='upMatchItem'>
                            <header>
                                <strong>HOME</strong>
                                <small>Sun. 13/May 1:10am </small>
                                <strong>Away</strong>
                            </header>
                            <hr/>
                            <footer>
                                <div className='footfDiv1'>
                                    <small>Black Stars Fc</small>
                                </div>
                                <div className='footfDiv2'>
                                   <center><strong>Vs</strong></center>
                                   <div className='timeVenue'>
                                        <center>
                                        <small>Kamolo Pri.</small>
                                        </center>
                                   </div>
                                </div>
                                <div className='footfDiv3'>
                                    <small>Kocholia Fc</small>
                                </div>
                            </footer>
                        </article>

                        <article className='upMatchItem'>
                            <header>
                                <strong>HOME</strong>
                                <small>Sun. 13/May 1:10am </small>
                                <strong>Away</strong>
                            </header>
                            <hr/>
                            <footer>
                                <div className='footfDiv1'>
                                    <small>Kangelemge Fc</small>
                                </div>
                                <div className='footfDiv2'>
                                   <center><strong>Vs</strong></center>
                                   <div className='timeVenue'>
                                        <center>
                                        <small>Okuleu pri.</small>
                                        </center>
                                   </div>
                                </div>
                                <div className='footfDiv3'>
                                    <small>Akolong Fc</small>
                                </div>
                            </footer>
                        </article>


                        
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