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
            <br />
                <small>TESO NORTH SUB-COUNTY LEAGE 2022/2023</small>
                
            <div className='LLBody'>
                    <table className='table'>
                        <thead>
                            <tr className='tr'>
                                <th>POS.</th>
                                <th>CLUB</th>
                                <th>P</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>F</th>
                                <th>A</th>
                                <th>+-</th>
                                <th>PTS</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item)=>{
                                return(
                                    <tr className='tr' id='tr'>
                                        <td>{item.pos}</td>
                                        <td>{item.club}</td>
                                        <td>{item.p}</td>
                                        <td>{item.w}</td>
                                        <td>{item.d}</td>
                                        <td>{item.l}</td>
                                        <td>{item.f}</td>
                                        <td>{item.a}</td>
                                        <td>{item['+-']}</td>
                                        <td>{item.pts}</td> 
                                        <td><i class="fas fa-edit" onClick={()=>toEditTable(item.pos,item.club,item.p,item.w,item.d,item.l,item.f,item.a,item['+-'],item.pts)}></i></td> 
                                    </tr>     
                                   
                                )
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}


export default Table