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
            "club":"KATAKWA FC",
            "p":"14",
            "w":"9",
            "d":"2",
            "l":"3",
            "f":"23",
            "a":"7",
            "gd":"16",
            "pts":"29"
        },
        {
            "pos":"2",
            "club":"POOL FC",
            "p":"14",
            "w":"8",
            "d":"3",
            "l":"3",
            "f":"21",
            "a":"9",
            "gd":"12",
            "pts":"27"
        },


        {
            "pos":"3",
            "club":"KANGELEMGE FC",
            "p":"13",
            "w":"8",
            "d":"2",
            "l":"3",
            "f":"15",
            "a":"9",
            "gd":"6",
            "pts":"26"
        },
        {
            "pos":"4",
            "club":"ABOLOI FC",
            "p":"15",
            "w":"8",
            "d":"2",
            "l":"5",
            "f":"21",
            "a":"17",
            "gd":"4",
            "pts":"26"
        },
        {
            "pos":"5",
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
            "pos":"6",
            "club":"AKOBWAIT STARS FC",
            "p":"15",
            "w":"8",
            "d":"1",
            "l":"6",
            "f":"26",
            "a":"17",
            "gd":"9",
            "pts":"25"
        },

        {
            "pos":"7",
            "club":"KOCHOLYA FC",
            "p":"13",
            "w":"7",
            "d":"4",
            "l":"2",
            "f":"24",
            "a":"15",
            "gd":"9",
            "pts":"25"
        },
      


        {
            "pos":"8",
            "club":"OKULEU FC",
            "p":"14",
            "w":"6",
            "d":"3",
            "l":"5",
            "f":"14",
            "a":"11",
            "gd":"3",
            "pts":"21"
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
            "a":"22",
            "gd":"-7",
            "pts":"18"
        },
        {
            "pos":"11",
            "club":"TN LEGENDS",
            "p":"14",
            "w":"5",
            "d":"1",
            "l":"8",
            "f":"17",
            "a":"26",
            "gd":"-9",
            "pts":"14"
        },
               
        {
            "pos":"12",
            "club":"AKOLONG FC",
            "p":"14",
            "w":"3",
            "d":"5",
            "l":"6",
            "f":"6",
            "a":"11",
            "gd":"-6",
            "pts":"14"
        },

        {
            "pos":"13",
            "club":"KORISAI FC",
            "p":"13",
            "w":"4",
            "d":"2",
            "l":"7",
            "f":"11",
            "a":"17",
            "gd":"-6",
            "pts":"14"
        },
        {
            "pos":"14",
            "club":"KORURUMA FC",
            "p":"13",
            "w":"4",
            "d":"2",
            "l":"7",
            "f":"13",
            "a":"21",
            "gd":"-8",
            "pts":"14"
        },

   
        {
            "pos":"15",
            "club":"SOKOPAKA FC",
            "p":"13",
            "w":"3",
            "d":"2",
            "l":"8",
            "f":"7",
            "a":"22",
            "gd":"-15",
            "pts":"11"
        },
       
        {
            "pos":"16",
            "club":"ADANYA WEMBE FC",
            "p":"14",
            "w":"2",
            "d":"3",
            "l":"9",
            "f":"13",
            "a":"27",
            "gd":"-14",
            "pts":"9"
        },
        {
            "pos":"17",
            "club":"KAKURKIT BULLETS",
            "p":"13",
            "w":"2",
            "d":"2",
            "l":"9",
            "f":"18",
            "a":"23",
            "gd":"-5",
            "pts":"8"
        },

    ]

    const [clubsData, setclubsData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
    const [loadingDisplay, setloadingDisplay] = useState("block");

    const [myIndexArray, setmyIndexArray] = useState([]);
    useEffect(()=>{
        // getClubs()
        setclubsData(data)
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
    
           <div style={{width:'100%'}}>
            <a href='https://kol.jumia.com/api/click/link/d884787d-e6bd-4979-8f7e-7cd224451b46/11ca45e2-40bf-48c8-adc7-4926691f1c05'>                            <img src='https://kol.jumia.com/banners/4KGCXsgo5buixQ3gB46p6IlKm04OEtVGtzHr3pVc.jpeg' width='100%' height='100%' /></a>

            </div>
       </section>
            </div>
            
            <br />
        </div>
        )
    }
}




export default Table