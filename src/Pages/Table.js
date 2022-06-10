import  '../Components/App-Compnt/Css/Landing.css'
import {Link, useNavigate} from 'react-router-dom'
import TableData from '../Files/TableData.txt'
import backend from '../Files/backend.php'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Dots,Waves } from 'loading-animations-react';
import  './Css/Table.css'

function Table() {
    const data=[
        {
            "pos":"1",
            "club":"POOL FC",
            "p":"13",
            "w":"8",
            "d":"3",
            "l":"2",
            "f":"21",
            "a":"9",
            "gd":"12",
            "pts":"27"
        },

        {
            "pos":"2",
            "club":"KABKARA FC",
            "p":"14",
            "w":"7",
            "d":"4",
            "l":"3",
            "f":"23",
            "a":"9",
            "gd":"14",
            "pts":"25"
        },
        {
            "pos":"3",
            "club":"AKOBWAIT STARS FC",
            "p":"14",
            "w":"8",
            "d":"1",
            "l":"5",
            "f":"25",
            "a":"15",
            "gd":"10",
            "pts":"25"
        },
        {
            "pos":"4",
            "club":"KANGELEMGE FC",
            "p":"12",
            "w":"8",
            "d":"1",
            "l":"3",
            "f":"13",
            "a":"7",
            "gd":"6",
            "pts":"25"
        },
        {
            "pos":"5",
            "club":"KOCHOLYA FC",
            "p":"12",
            "w":"7",
            "d":"3",
            "l":"2",
            "f":"22",
            "a":"13",
            "gd":"9",
            "pts":"24"
        },
      
        {
            "pos":"6",
            "club":"ABOLOI FC",
            "p":"13",
            "w":"8",
            "d":"0",
            "l":"5",
            "f":"19",
            "a":"15",
            "gd":"4",
            "pts":"24"
        },
        {
            "pos":"7",
            "club":"KATAKWA FC",
            "p":"12",
            "w":"7",
            "d":"2",
            "l":"3",
            "f":"21",
            "a":"7",
            "gd":"14",
            "pts":"23"
        },
        {
            "pos":"8",
            "club":"OKULEU FC",
            "p":"13",
            "w":"6",
            "d":"2",
            "l":"5",
            "f":"14",
            "a":"11",
            "gd":"3",
            "pts":"20"
        },
      
        {
            "pos":"9",
            "club":"HOMEBOYS FC",
            "p":"13",
            "w":"5",
            "d":"4",
            "l":"4",
            "f":"19",
            "a":"22",
            "gd":"-3",
            "pts":"19"
        },
        {
            "pos":"10",
            "club":"BLACK STARS FC",
            "p":"13",
            "w":"6",
            "d":"0",
            "l":"7",
            "f":"15",
            "a":"2",
            "gd":"-7",
            "pts":"18"
        },
        {
            "pos":"11",
            "club":"KORISAI FC",
            "p":"12",
            "w":"4",
            "d":"2",
            "l":"6",
            "f":"11",
            "a":"16",
            "gd":"-5",
            "pts":"14"
        },
        {
            "pos":"12",
            "club":"KORURUMA FC",
            "p":"12",
            "w":"4",
            "d":"1",
            "l":"7",
            "f":"12",
            "a":"12",
            "gd":"0",
            "pts":"13"
        },
  
      
        {
            "pos":"13",
            "club":"AKOLONG FC",
            "p":"12",
            "w":"3",
            "d":"3",
            "l":"6",
            "f":"4",
            "a":"9",
            "gd":"-5",
            "pts":"12"
        },
        {
            "pos":"14",
            "club":"TN LEGENDS",
            "p":"12",
            "w":"4",
            "d":"0",
            "l":"8",
            "f":"15",
            "a":"25",
            "gd":"-10",
            "pts":"12"
        },
   
        {
            "pos":"15",
            "club":"SOKOPAKA FC",
            "p":"12",
            "w":"3",
            "d":"1",
            "l":"8",
            "f":"6",
            "a":"21",
            "gd":"-15",
            "pts":"10"
        },
       
        {
            "pos":"16",
            "club":"ADANYA WEMBE FC",
            "p":"13",
            "w":"2",
            "d":"2",
            "l":"9",
            "f":"13",
            "a":"27",
            "gd":"-14",
            "pts":"8"
        },
        {
            "pos":"17",
            "club":"KAKURKIT BULLETS",
            "p":"12",
            "w":"2",
            "d":"1",
            "l":"9",
            "f":"18",
            "a":"23",
            "gd":"-5",
            "pts":"7"
        },

    ]

    const [clubsData, setclubsData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [loadingDisplay, setloadingDisplay] = useState("block");

    const [myIndexArray, setmyIndexArray] = useState([]);
    useEffect(()=>{
        getClubs()
    },[])

    function getClubs() {
        axios.get('https://busia-muslim-council.herokuapp.com/club/clubs').then((response)=>{
            const clubsArray=response.data
            setclubsData(data)
            setisLoading(false)
            setloadingDisplay("none")
        })
    }
        
  
    return(
        <div className='Lbox'>
            {isLoading ? <LoadingBox />: <Table /> }
        </div>
    )

    function LoadingBox() {
        return(
            <div className='loading' style={{display:loadingDisplay}}>
                <center>
                <div class="lds-facebook"><div></div><div></div><div></div></div>
                </center>    
            </div>
        )
    }

 
        



    function Table() {
        return(
            <div className='LLBody'>
            <br />
            <div className='CLhead'>
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h6 style={{fontWeight:'10'}}>Teso North Sub-county Leage 2022/2023</h6>
                        </div>
                    </div>
            </div>
             
            <div class="containerClubT">
            <section>
           <ul className='tableUl'>
               <li>
               {/* <small className='text-muted' style={{color:'red',marginLeft:'10px'}}>Update in progress... <i class="fa fa-spinner" aria-hidden="true"></i></small> */}

                    <table class="table table-hover">

                        <thead>
                        <tr>
                            <th>POS</th>
                            <th>CLUB</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th><b><strong>GD</strong></b></th>
                            <th><b><strong >PTS</strong></b></th>
                            <th>F</th>
                            <th>GA</th>

                        </tr>
                        </thead>
                            <tbody>
                            {/* .slice().sort((a, b) => b.gd - a.gd).                  */}
                                {clubsData.map((item)=>{
                                        
                                    return(
                                        <tr>
                                            <td>{item.pos}</td>
                                            <td>{item.club}</td>
                                            <td>{item.p}</td>
                                            <td>{item.w}</td>
                                            <td>{item.d}</td>
                                            <td>{item.l}</td>
                                            <td><b><strong>{item.gd}</strong></b></td>
                                            <td><b><strong style={{color:'green'}}>{item.pts}</strong></b></td>
                                            <td>{item.f}</td>
                                            <td>{item.a}</td>
                                    
                                        </tr>
                                        )
                                    
                                })
                                
                                }

                            </tbody>
                    </table>
               </li>
           </ul>
    
    
       </section>
            </div>
            
            <br />
        </div>
        )
    }
}




export default Table