import playercss from './Css/Players.css'
import { Link } from 'react-router-dom'

function Players() {
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
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Licence No.</th>
                                <th>Club</th>
                                <th>VIEW</th>
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
                                        <td>
                                            <Link to='/player-detail' className='btn btn-success btn-sm'  style={{width:'100%'}}>View</Link>
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

export default Players