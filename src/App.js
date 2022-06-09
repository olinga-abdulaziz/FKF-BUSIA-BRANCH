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
import EditTable from './Pages/EditTable';
import AddClub from './Pages/AddClub';
import ManageFixture from './Pages/ManageFixture';
import Maintanance from './Maintanance';
import { useState } from 'react';
import WeekMain from './Pages/WeeksMain';
import GameFix from './Pages/GameFix';
import AddResult from './Pages/AddResult';
import Admin from './Pages/Admin';
import Register from './Pages/Register';
import ControlPanel from './Pages/ControlPanel';

function App() {
    const [isMaintanance, setisMaintanance] = useState(false);
  return (
    <div>
      {isMaintanance ? <Maintanance />:<AppBox />}
    </div>
  );
}

function AppBox() {
  return(
    <div className="App">
        <nav className="navbar navbar-expand-md bg-dark navbar-dark fixed-top">
            <Link to='/'>
                <a className="navbar-brand" href="#">
                  <div className='logoox'>
                      <a href='#' ><img src={fkflogo} alt='fkf logo' width='100%' height='100%' /> </a>
                    </div>
                </a>
                <font  style={{color:'white'}}>FKF BUSIA BRANCH</font>
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
              <span className="navbar-toggler-icon"></span>
            </button>

            
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
              <li className="nav-item">
                  <Link to='/' data-toggle="collapse" data-target="#collapsibleNavbar"  className='nav-link'><i class="fas fa-home"></i> Home</Link>
              </li>
                
                <li className="nav-item">
                  <Link to='/results' data-toggle="collapse" data-target="#collapsibleNavbar" className='nav-link'><i class="fas fa-poll"></i> Results</Link>
                </li>
                <li className="nav-item">
                  <Link to='/table' data-toggle="collapse" data-target="#collapsibleNavbar"  className='nav-link'><i class="fas fa-table"></i> Table</Link>
                </li>
                <li className="nav-item">
                  <Link to='/players' data-toggle="collapse" data-target="#collapsibleNavbar" className='nav-link'><i class="fas fa-users"></i> Players</Link>
                </li>
                <li className="nav-item">
                  <Link to='/clubs' data-toggle="collapse" data-target="#collapsibleNavbar" className='nav-link'><i class="fas fa-volleyball-ball"></i> Clubs</Link>
                </li>
                <li className="nav-item">
                  <Link to='/fixtures' data-toggle="collapse" data-target="#collapsibleNavbar" className='nav-link'><i class="fas fa-poll-h"></i> Fixtures</Link>
                </li>
                <li className="nav-item">
                  <Link to='/admin' data-toggle="collapse" data-target="#collapsibleNavbar" className='nav-link'><i class="fas fa-user-shield"></i> Admin</Link>
                </li>
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
              <Route exact path='/edit-table' element={<EditTable />}/>
              <Route exact path='/add-club' element={<AddClub />}/>
              <Route exact path='/manage-fixture' element={<ManageFixture />}/>
              <Route exact path='/week-main' element={<WeekMain />}/>
              <Route exact path='/game-panel' element={<GameFix />}/>
              <Route exact path='/add-result' element={<AddResult />}/>
              <Route exact path='/admin' element={<Admin />}/>
              <Route exact path='/new-account' element={<Register />}/>
              <Route exact path='/control-panel' element={<ControlPanel />}/>
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
  )
}

export default App;
