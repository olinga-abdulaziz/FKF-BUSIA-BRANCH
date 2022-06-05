import './Css/Clubs.css'
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
                 <font className='perHead'><i class="fas fa-baseball-ball"></i><strong>TESO NORTH SUB-COUNTY LEAGE CLUBS</strong></font>
            </div>
            <div className='CLbody'>
                <div className='clbsTopN'>
                    <strong className='text-muted'>Registered Clubs</strong>
                    <Link to='/add-club' className='btn btn-secondary'><i class="fa fa-plus-circle" aria-hidden="true"></i> New Club</Link>                  
                </div>
                <div class="containerClubT">
                    {isLoading ? <Dots text='Loading ...' className='loading'   /> : <TableContainer />}    
                </div>
            </div>
        </div>
    )

    function TableContainer() {
        return (
            <table class="table table-hover">
            <thead>
            <tr>
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
                        <td>{item.clubname}</td>
                        <td>{item.abriviation}</td>
                        <td>{item.home}</td>
                        <td>{item.stadium}</td>
                    </tr>
                    )
                })}
                  
                     
                </tbody>
    </table> 
        )
    }
}

export default Clubs