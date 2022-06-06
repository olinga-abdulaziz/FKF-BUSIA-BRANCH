import * as React from 'react'
import { Link } from 'react-router-dom';
import '../Pages/Css/manageF.css';


function WeekMain() {
    return(
        <div className='manageContainer'>
            <div className='container manageBox'>
                <div className='manageTopBarC'>
                    <strong>Week 1</strong> 
                    <Link to='/game-panel' className='btn btn-outline-info'><i class="fa fa-plus-circle" aria-hidden="true"></i>Add Game</Link>
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