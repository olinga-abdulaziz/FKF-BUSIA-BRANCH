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
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h4>Teso North Clubs</h4>
                    <p>The table below consist of Teso north Clubs</p>
                </div>
            </div>
            </div>
            <div className='CLbody'>
                <div className='clbsTopN'>
                    <strong className='text-muted'>Registered Clubs</strong>
                    <Link to='/add-club' className='btn btn-secondary'><i class="fa fa-plus-circle" aria-hidden="true"></i> New Club</Link>                  
                </div>
                <div className="containerClubT">
                    {isLoading ? <div class="spinner-border text-dark spn1"></div> : <TableContainer />}    
                </div>
            </div>
        </div>
    )

    function TableContainer() {
        return (
            <table className="table table-hover">
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