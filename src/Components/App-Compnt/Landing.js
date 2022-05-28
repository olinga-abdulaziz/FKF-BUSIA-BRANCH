import  './Css/Landing.css'
import {Link} from 'react-router-dom'

import background from '../../Images/background.jpg'


function Landing() {

    return(
        <div>
            <div className='landingBox' style={{backgroundImage:`URL(${background})`}}>

                <center className='landface'>
                    <h1>Teso north fooltball federation</h1>
                    <p>forwad always and backward never is our slogan,Teso north legends football club. we are the champions.forwad always and backward never is our slogan,Teso north legends football club. we are the champions.forwad always and backward never is our slogan</p>
                    <div>
                    <Link to='/table'><button className='btnViewTable'>View Table</button></Link>   
                        <a href='#landingnews'><button className='btnGetStarted'>Get Started</button></a>
                    </div>
                </center>
            
            </div>

            <div className='landingnews' id='landingnews'>
                <div className='newsBodyCover'>
                    <div className='playerStats'>
                        <div className='statsHead'>
                            <strong className='statsTitle'>FKF NOTICE</strong>
                        </div>

                        <div className='statBody'>

                        </div>
                    </div>
            </div>

        </div>
        </div>
    )
}

export default Landing