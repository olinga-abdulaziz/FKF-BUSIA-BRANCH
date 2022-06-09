import './Css/Clubs.css'
import  '../Components/App-Compnt/Css/Landing.css'
import fkflogo from '../Images/fkflogo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Dots,Waves } from 'loading-animations-react';


function Clubs() {

    const [clubsData, setclubsData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    useEffect(()=>{
        getClubs()
    },[])

    function getClubs() {
        axios.get('https://busia-muslim-council.herokuapp.com/club/clubs').then((response)=>{
            const clubsArray=response.data
            setclubsData(clubsArray)
            setisLoading(false)
        })
    }
    return(
        <div className='CLBox'>
            <div className='CLhead'>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                <h6 style={{fontWeight:'10'}}>Teso North Sub-county Clubs 2022/2023</h6>
                    <p className='text-muted'>The table below consist of Teso north Clubs</p>
                </div>
            </div>
            </div>
            <div className='CLbody'>
                <div className='clbsTopN'>
                    <strong className='text-muted'>Registered Clubs</strong>
                </div>
                <div className="containerClubT">
                    {isLoading ? <div class="spinner-border text-dark spn1"></div> : <TableContainer />}    
                </div>
            </div>
        </div>
    )

    function TableContainer() {
        return (
            <ul className='tableUl'>
            <li>
            <table className="table table-hover">
            <thead>
            <tr>
                <th>NO</th>
                <th>CLUB NAME</th>
                <th>ABRV</th>
                <th>LOCATION</th>
                <th>STADIUM</th>
            </tr>
            </thead>
                <tbody>
                  
                {clubsData.map((item)=>{
                    return(
                    <tr>
                        <td>{clubsData.indexOf(item)+1}</td>
                        <td>{item.clubname}</td>
                        <td>{item.abriviation}</td>
                        <td>{item.home}</td>
                        <td>{item.stadium}</td>
                    </tr>
                    )
                })}
                  
                     
                </tbody>
    </table> 
    </li>
    </ul>
        )
    }
}

export default Clubs