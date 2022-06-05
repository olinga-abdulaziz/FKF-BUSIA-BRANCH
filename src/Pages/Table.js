import  '../Components/App-Compnt/Css/Landing.css'
import {Link, useNavigate} from 'react-router-dom'
import TableData from '../Files/TableData.txt'
import backend from '../Files/backend.php'
import Button from '@mui/material/Button';

function Table() {

    const navigate=useNavigate()

    const toEditTable=(pos,club,p,w,d,l,f,a,plm,pts)=>{
        navigate('/edit-table',{state:
            {
                pos:pos,
                club:club,
                p:p,
                w:w,
                d:d,
                l:l,
                f:f,
                a:a,
                plm:plm,
                pts:pts                                            
        
        }});
          }
        

    const data=[

        {
            "pos":"1",
            "club":"KABKARA FC",
            "p":"12",
            "w":"7",
            "d":"3",
            "l":"2",
            "f":"23",
            "a":"8",
            "+-":"15",
            "pts":"24"
        },
        {
            "pos":"2",
            "club":"KANGELEMGE FC",
            "p":"10",
            "w":"7",
            "d":"1",
            "l":"2",
            "f":"11",
            "a":"5",
            "+-":"6",
            "pts":"22"
        },
        {
            "pos":"3",
            "club":"POOL FC",
            "p":"11",
            "w":"6",
            "d":"3",
            "l":"2",
            "f":"18",
            "a":"8",
            "+-":"10",
            "pts":"21"
        },
        {
            "pos":"4",
            "club":"ABOLOI FC",
            "p":"11",
            "w":"7",
            "d":"0",
            "l":"4",
            "f":"18",
            "a":"14",
            "+-":"4",
            "pts":"21"
        },
        {
            "pos":"5",
            "club":"KOCHOLYA FC",
            "p":"10",
            "w":"6",
            "d":"2",
            "l":"2",
            "f":"19",
            "a":"11",
            "+-":"8",
            "pts":"20"
        },
        {
            "pos":"6",
            "club":"AKOBWAIT STARS FC",
            "p":"12",
            "w":"6",
            "d":"1",
            "l":"5",
            "f":"20",
            "a":"14",
            "+-":"6",
            "pts":"19"
        },
        {
            "pos":"7",
            "club":"HOMEBOYS FC",
            "p":"11",
            "w":"5",
            "d":"3",
            "l":"3",
            "f":"16",
            "a":"18",
            "+-":"-2",
            "pts":"18"
        },
        {
            "pos":"8",
            "club":"BLACK STARS FC",
            "p":"11",
            "w":"6",
            "d":"0",
            "l":"5",
            "f":"15",
            "a":"18",
            "+-":"-3",
            "pts":"18"
        },
        {
            "pos":"9",
            "club":"OKULEU FC",
            "p":"11",
            "w":"5",
            "d":"2",
            "l":"4",
            "f":"10",
            "a":"9",
            "+-":"1",
            "pts":"17"
        },
        {
            "pos":"10",
            "club":"KATAKWA FC",
            "p":"10",
            "w":"4",
            "d":"3",
            "l":"3",
            "f":"15",
            "a":"8",
            "+-":"7",
            "pts":"15"
        },
        {
            "pos":"11",
            "club":"AKOLONG FC",
            "p":"11",
            "w":"3",
            "d":"3",
            "l":"5",
            "f":"4",
            "a":"8",
            "+-":"-4",
            "pts":"12"
        },
        {
            "pos":"12",
            "club":"KORURUMA FC",
            "p":"10",
            "w":"4",
            "d":"0",
            "l":"6",
            "f":"9",
            "a":"15",
            "+-":"-6",
            "pts":"10"
        },
        {
            "pos":"13",
            "club":"KORISAI FC",
            "p":"10",
            "w":"3",
            "d":"1",
            "l":"6",
            "f":"9",
            "a":"15",
            "+-":"-6",
            "pts":"10"
        },
        {
            "pos":"14",
            "club":"SOKOPAKA FC",
            "p":"10",
            "w":"3",
            "d":"1",
            "l":"6",
            "f":"5",
            "a":"11",
            "+-":"-6",
            "pts":"10"
        },
        {
            "pos":"15",
            "club":"TN LEGENDS",
            "p":"11",
            "w":"3",
            "d":"1",
            "l":"7",
            "f":"16",
            "a":"25",
            "+-":"-9",
            "pts":"10"
        },
        {
            "pos":"16",
            "club":"ADANYA WEMBE FC",
            "p":"11",
            "w":"2",
            "d":"1",
            "l":"8",
            "f":"11",
            "a":"22",
            "+-":"-11",
            "pts":"7"
        },
        {
            "pos":"17",
            "club":"KAKURKIT BULLETS",
            "p":"10",
            "w":"1",
            "d":"1",
            "l":"8",
            "f":"11",
            "a":"21",
            "+-":"-10",
            "pts":"4"
        },

    ]
    return(
        <div className='Lbox'>
            <div className='LLBody'>
                <div className='container'>
                    <br />
                    <h4>TESO NORTH SUB-COUNTY LEAGE 2022/2023</h4>
                    <p>The table-hover class enables a hover state (grey background on mouse over) on table rows:</p> 
                    <div className='adsbox'>
                      <a href="https://kol.jumia.com/api/click/link/d884787d-e6bd-4979-8f7e-7cd224451b46/026234e5-b229-4881-be28-679a642f9da4"><img width='100%' height='100%' src="https://kol.jumia.com/banners/AwI8xxxgXCOgvEKLeIYFaEd5UYr1T9uxiLnyWip4.png" alt="Computing Category"/></a>           
                    </div>
                </div>

                <br />

                <table class="table table-hover">
                    <thead>
                    <tr>
                        <th>POS</th>
                        <th>CLUB</th>
                        <th>P</th>
                        <th>W</th>
                        <th>D</th>
                        <th>L</th>
                        <th>F</th>
                        <th>GD</th>
                        <th>PTS</th>
                    </tr>
                    </thead>
                        <tbody>
                        {data.map((item)=>{
                                return(
                                <tr>
                                    <td>1</td>
                                    <td>KNG</td>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>5</td>
                                    <td>10</td>
                                    <td>11</td>
                                    <td>33</td>
                                    <td>55</td>
                                </tr>
                                   )
                                })}
                        </tbody>
                </table>
                
                <br />
            </div>
        </div>
    )
}


export default Table