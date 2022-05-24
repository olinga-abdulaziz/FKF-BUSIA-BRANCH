import './App.css';
import Landing from './Components/App-Compnt/Landing';
import fkflogo from './Images/fkflogo.png'
import Clubs from './Pages/Clubs';
import ClubDetail from './Pages/ClubDetail';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Players from './Pages/Players'
import Fixtures from './Pages/Fixture';
import Playerdetail from './Pages/Playerdetail';
import Results from './Pages/Results';
import Table from './Pages/Table';


function App() {
  return (
    <div className="App">
        <nav className='nav'>
            <div className='logoDiv'>
                <div className='logoox'>
                  <a href='#' ><img src={fkflogo} alt='fkf logo' width='100%' height='100%' /> </a>
                </div>
                <font className='brand' style={{color:'white'}}>FKF</font><font className='brand' style={{color:'white'}}>  BUSIA</font><font style={{color:'white'}} className='brand'>BRANCH</font>
            </div>
            <div className='linkDiv'>
                <ul>
                  <li><Link to='/' className='alinks'>Home</Link></li>
                  <li><Link to='/results' className='alinks'>Results</Link></li>
                  <li><Link to='/players' className='alinks'>Players</Link></li>
                  <li><Link to='/clubs' className='alinks'>Clubs</Link></li>
                  <li><Link to='/fixtures' className='alinks'>Fixtures</Link></li>
                </ul>
            </div>
        </nav>
        <main className='main'>
          <Routes>
              <Route exact path='/' element={<Landing />}/>
              <Route exact path='/clubs' element={<Clubs />}/>
              <Route exact path='/players' element={<Players />}/>
              <Route exact path='/table' element={<Table />}/>
              <Route exact path='/club-detail' element={<ClubDetail />}/>
              <Route exact path='/fixtures' element={<Fixtures />}/>
              <Route exact path='/player-detail' element={<Playerdetail />}/>
              <Route exact path='/results' element={<Results />}/>
          </Routes>
        </main>
        <footer className='footer'>
            <section className='botFesc1'>
                <strong>FKF Teso North</strong>
                <small>
                <ul>
                  <li>30 Registerd Clubs</li>
                  <li>615 Registerd Players</li>
                  <li>31 Registerd Referees</li>
                </ul>
                </small>
            </section>
            <section className='botFesc2'>
            <strong>ABOUT</strong>
            <small>
            <p>Teso north  football club. we are the is our slogan,Teso north legends football club. we are the champions.forwad always and backward never is our slogan</p>
            </small>
            <strong>CONTACT</strong> <br />
            <small>Phone 1: +2547226890871</small> <br />
            <small>Phone 2: +2547226890871</small> <br />
            <small>email: tesonorthfkf@gmail.com</small> <br />
            </section>
            <section className='botFesc3'>
            <strong>FOLLOW</strong> <br />
            <small>twitter: @ fkftesonorth</small> <br />
            <small>facebook: @ tesonorthfkf</small> <br />
            <small>instagram: fkfteso</small> <br />
            <small>youtube: fkftesonorth</small> <br /> <br />
            <small>Remember to read <a href='#' >Our privacy and policy</a></small>
            </section>
        </footer>
        <div className='footer'>
        <section className='botFesc2'>
          <strong>DEVELOPER</strong> <br />
          <small>This web application was developed by : <br /> DATA-LINK L.T.D</small>
          <br />
          <small>read more about DATA-LINK L.T.D at <a href='#' >www.datalinkltd.org</a> or send us an email at datalinkmalba1000@gmail.com</small>
        </section>
        </div>
        <div className='copywriteDiv'>
            <center><small>copywrited <span>&copy;</span> 2022</small></center>
        </div>
    </div>
  );
}

export default App;
