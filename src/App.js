import './App.css';
import Landing from './Components/App-Compnt/Landing';
import fkflogo from './Images/fkflogo.png'
import Clubs from './Pages/Clubs';
import ClubDetail from './Pages/ClubDetail';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom'
import Players from './Pages/Players'
import Fixtures from './Pages/Fixture';
import Playerdetail from './Pages/Playerdetail';

//  kS  ._XZGF H<J.k/

function App() {
  return (
    <div className="App">
        <nav className='nav'>
            <div className='logoDiv'>
                <div className='logoox'>
                  <a href='#' ><img src={fkflogo} alt='fkf logo' width='100%' height='100%' /> </a>
                </div>
                <font className='brand' style={{color:'black'}}>FKF</font><font className='brand' style={{color:'red'}}>  BUSIA</font><font style={{color:'green'}} className='brand'>BRANCH</font>
            </div>
            <div className='linkDiv'>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/players'>Player</Link></li>
                  <li><Link to='/clubs'>Clubs</Link></li>
                  <li>Refree</li>
                  <li><Link to='/fixtures'>Fixtures</Link></li>
                </ul>
                <button className='menu'>menu</button>
            </div>
        </nav>
        <main className='main'>
          <Routes>
              <Route exact path='/' element={<Landing />}/>
              <Route exact path='/clubs' element={<Clubs />}/>
              <Route exact path='/players' element={<Players />}/>
              <Route exact path='/club-detail' element={<ClubDetail />}/>
              <Route exact path='/fixtures' element={<Fixtures />}/>
              <Route exact path='/player-detail' element={<Playerdetail />}/>
          </Routes>
        </main>
        <footer className='footer'>

        </footer>
    </div>
  );
}

export default App;
