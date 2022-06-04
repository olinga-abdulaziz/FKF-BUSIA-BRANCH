import './Css/Clubs.css'
import fkflogo from '../Images/fkflogo.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'



function Clubs() {

    const [clubsData, setclubsData] = useState([]);

    useEffect(()=>{
        getClubs()
    },[])

    function getClubs() {
        axios.get('https://busia-muslim-council.herokuapp.com/club/clubs').then((response)=>{
            const clubsArray=response.data
            setclubsData(clubsArray)
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
                    <Link to='/add-club' className='btn btn-secondary'>New Club</Link>                  
                </div>
                <div class="containerClubT">
                        <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th>CLUB NAME</th>
                                    <th>LOCATION</th>
                                    <th>STADIUM</th>
                                </tr>
                                </thead>
                                    <tbody>
                                      
                                    {clubsData.map((item)=>{
                                        return(
                                        <tr>
                                            <td>{item.clubname}</td>
                                            <td>{item.home}</td>
                                            <td>{item.stadium}</td>
                                        </tr>
                                        )
                                    })}
                                      
                                         
                                    </tbody>
                        </table> 
                </div>
            </div>
        </div>
    )
}

export default Clubs