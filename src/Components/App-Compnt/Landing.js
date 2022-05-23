import  './Css/Landing.css'
import {Link} from 'react-router-dom'


function Landing() {
    const data=[
        {
            "pos":"1",
            "club":"Pool fc",
            "p":"1",
            "w":"3",
            "d":"5",
            "l":"2",
            "f":"2",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
        {
            "pos":"2",
            "club":"Kakurkit fc",
            "p":"2",
            "w":"3",
            "d":"2",
            "l":"2",
            "f":"3",
            "a":"2",
            "+-":"1",
            "pts":"1"
        },
    ]
    return(
        <div className='Lbox'>
            <div className='LCardsDiv'>

                <ul>
                    <li>
                        <div className='LDispCard'>
                            <center>
                            <font>2300</font> <br />
                            <font>Clubs</font>
                            </center>
                        </div>
                    </li>
                    <li>
                        <div className='LDispCard'>
                            <center>
                            <font>53000</font> <br />
                            <font>Players</font>
                            </center>
                        </div>
                    </li>
                    <li>
                        <div className='LDispCard'>
                            <center>
                            <font>700</font> <br />
                            <font>Referies</font>
                            </center>
                        </div>
                    </li>

                    <li>      
                        <div className='LDispCard'>
                            <center>
                            <font>930</font> <br />
                            <font>LinesMen</font>
                            </center>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='LLhead'>
                <h3>TESO NORTH SUB-COUNTY LEAGE TABLE</h3>
            </div>

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
                                <th>--</th>
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
                                        <td>
                                            <Link to='/club-detail' className='btn btn-success btn-sm'  style={{width:'100%'}}>VIEW</Link>
                                        </td>
                                    </tr>
                                   
                                )
                            })}
                        </tbody>
                    </table>
            </div>
        </div>
    )
}

export default Landing