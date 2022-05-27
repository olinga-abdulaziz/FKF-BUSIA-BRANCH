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
            <a href="https://kol.jumia.com/api/click/link/d884787d-e6bd-4979-8f7e-7cd224451b46/28699ebb-f71e-4fe2-9d1e-f6219269490c"><img src="https://kol.jumia.com/banners/wXWKZaTleGlzWJsAMJ9v4H4AuafZqIpgRcIwoNwJ.png" alt="DRINKS FEST 23rd May - 29th May"/></a>

        </div>
        </div>
    )
}

export default Landing