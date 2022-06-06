import * as React from 'react'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import '../Pages/Css/manageF.css';


function WeekMain() {
    const location = useLocation();
    const navigate=useNavigate();

    function toGamePanel(week) {
        navigate('/game-panel',{state:{week:week}})
    }

    return(
        <div className='manageContainer'>
            <div className='container manageBox'>
                <div className='manageTopBarC'>
                    <strong>{location.state.week}</strong> 
                    <button onClick={()=>toGamePanel(location.state.week)} className='btn btn-outline-info'><i class="fa fa-plus-circle" aria-hidden="true"></i>Add Game</button>
                </div>
                <br />
            
                <article className='card cardgame'>
                    <div className='card-header cadh0'>
                        <small className='text-muted'>Home</small>
                        <small>Sunday 2/4/2022 | Amoni Primary</small>
                        <small className='text-muted'>Away</small>
                    </div>
                   <div className='cardgMain'>
                    <small>Pool FC</small>
                    <small>Vs</small>
                    <small>Kabkara FC</small>
                   </div>
                </article>
                <article className='card cardgame'>
                    <div className='card-header cadh0'>
                        <small className='text-muted'>Home</small>
                        <small>Sunday 2/4/2022 | Amoni Primary</small>
                        <small className='text-muted'>Away</small>
                    </div>
                   <div className='cardgMain'>
                    <small>Pool FC</small>
                    <small>Vs</small>
                    <small>Kabkara FC</small>
                   </div>
                </article>
                <article className='card cardgame'>
                    <div className='card-header cadh0'>
                        <small className='text-muted'>Home</small>
                        <small>Sunday 2/4/2022 | Amoni Primary</small>
                        <small className='text-muted'>Away</small>
                    </div>
                   <div className='cardgMain'>
                    <small>Pool FC</small>
                    <small>Vs</small>
                    <small>Kabkara FC</small>
                   </div>
                </article>
                <article className='card cardgame'>
                    <div className='card-header cadh0'>
                        <small className='text-muted'>Home</small>
                        <small>Sunday 2/4/2022 | Amoni Primary</small>
                        <small className='text-muted'>Away</small>
                    </div>
                   <div className='cardgMain'>
                    <small>Pool FC</small>
                    <small>Vs</small>
                    <small>Kabkara FC</small>
                   </div>
                </article>
                
            </div>
        </div>
    )
}

export default WeekMain