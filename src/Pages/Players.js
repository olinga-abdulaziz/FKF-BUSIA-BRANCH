import playercss from './Css/Players.css'
import { Link } from 'react-router-dom'
import fkflogo from '../Images/fkflogo.png'
import '../App.css';

function Players() {
    const data=[
        {
            "pos":"1",
            "firstname":"Ali Osere",
            "licence":"FKFTSN/2223195",
            "club":"Kangelemge fc",
        },
        {
            "pos":"2",
            "firstname":"Erick okondo",
            "licence":"FKFTSN/2223195",
            "club":"Kocholia fc",
        },
        {
            "pos":"3",
            "firstname":"Zubeir Opaka",
            "licence":"FKFTSN/2223195",
            "club":"Akolong fc",
        },
        {
            "pos":"4",
            "firstname":"Mathew Osike",
            "licence":"FKFTSN/2223195",
            "club":"Pool fc",
        },
    ]
    return(
        <div className='Lbox'>

                <div className='maintContainer'>
                <div className='maintBox'>
                    <center>
                    <h4>This page is under Maintainance</h4>
                    <p>Our engeneers are currently working on this page.</p>
                    <i class="fas fa-tools"></i> 
                    </center>
                    </div>
                </div>
            {/* <div className='LLhead'>
                <strong>TESO NORTH SUB-COUNTY LEAGE PLAYERS</strong>
            </div>
            <div className='playerStats'>
                <div className='statsHead'>
                    <strong className='statsTitle'>Top PLayers</strong>
                </div>

                <div className='statBody'>
                    <article className='topPlayer'>
                        <div className='tpTop'>
                            <div className='tpImgDiv'>
                                <img src={fkflogo} width='100%' height='100%' />
                            </div>
                            <div className='tpProfile'>
                                <label style={{fontSize:'11px',color:'gray'}}><strong>NAME :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>Ali Osere</label> <br />
                                
                                <label style={{fontSize:'11px',color:'gray'}}><strong>POSITION :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>AM</label> <br />

                                <label style={{fontSize:'11px',color:'gray'}}><strong>LICENCE NO :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>FKFTNS/2232567</label> <br />
                                <label style={{fontSize:'11px',color:'gray'}}><strong>DATE OF BIRTH :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>12/3/2000</label> <br />
                            </div>
                        </div>
                        <div className='tpBot'>
                                <label style={{fontSize:'11px'}}><strong>CLUB :</strong></label> <br />
                                <label style={{fontSize:'13px',color:'gray'}}>Malaba Pool Fc</label> <br />
                        </div>
                    </article>

                    <article className='topPlayer'>
                        <div className='tpTop'>
                            <div className='tpImgDiv'>
                                <img src={fkflogo} width='100%' height='100%' />
                            </div>
                            <div className='tpProfile'>
                                <label style={{fontSize:'11px',color:'gray'}}><strong>NAME :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>Ali Osere</label> <br />
                                
                                <label style={{fontSize:'11px',color:'gray'}}><strong>POSITION :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>AM</label> <br />

                                <label style={{fontSize:'11px',color:'gray'}}><strong>LICENCE NO :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>FKFTNS/2232567</label> <br />
                                <label style={{fontSize:'11px',color:'gray'}}><strong>DATE OF BIRTH :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>12/3/2000</label> <br />
                            </div>
                        </div>
                        <div className='tpBot'>
                                <label style={{fontSize:'11px'}}><strong>CLUB :</strong></label> <br />
                                <label style={{fontSize:'13px',color:'gray'}}>Malaba Pool Fc</label> <br />
                        </div>
                    </article>

                    <article className='topPlayer'>
                        <div className='tpTop'>
                            <div className='tpImgDiv'>
                                <img src={fkflogo} width='100%' height='100%' />
                            </div>
                            <div className='tpProfile'>
                                <label style={{fontSize:'11px',color:'gray'}}><strong>NAME :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>Ali Osere</label> <br />
                                
                                <label style={{fontSize:'11px',color:'gray'}}><strong>POSITION :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>AM</label> <br />

                                <label style={{fontSize:'11px',color:'gray'}}><strong>LICENCE NO :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>FKFTNS/2232567</label> <br />
                                <label style={{fontSize:'11px',color:'gray'}}><strong>DATE OF BIRTH :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>12/3/2000</label> <br />
                            </div>
                        </div>
                        <div className='tpBot'>
                                <label style={{fontSize:'11px'}}><strong>CLUB :</strong></label> <br />
                                <label style={{fontSize:'13px',color:'gray'}}>Malaba Pool Fc</label> <br />
                        </div>
                    </article>
                    
                    <article className='topPlayer'>
                        <div className='tpTop'>
                            <div className='tpImgDiv'>
                                <img src={fkflogo} width='100%' height='100%' />
                            </div>
                            <div className='tpProfile'>
                                <label style={{fontSize:'11px',color:'gray'}}><strong>NAME :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>Ali Osere</label> <br />
                                
                                <label style={{fontSize:'11px',color:'gray'}}><strong>POSITION :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>AM</label> <br />

                                <label style={{fontSize:'11px',color:'gray'}}><strong>LICENCE NO :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>FKFTNS/2232567</label> <br />
                                <label style={{fontSize:'11px',color:'gray'}}><strong>DATE OF BIRTH :</strong></label> <br />
                                <label style={{fontSize:'13px'}}>12/3/2000</label> <br />
                            </div>
                        </div>
                        <div className='tpBot'>
                                <label style={{fontSize:'11px'}}><strong>CLUB :</strong></label> <br />
                                <label style={{fontSize:'13px',color:'gray'}}>Malaba Pool Fc</label> <br />
                        </div>
                    </article>
                </div>
            </div>
            <div className='LLBody'>
                <div className='searchDiv'>
                    <input type='search' className='inputSe' placeholder='search player ...'/><button className='btnSearchPL'>Search</button>
                </div>
                    <table className='table'>
                        <thead>
                            <tr className='tr'>
                                <th>POS.</th>
                                <th>First Name</th>
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
                                        <td>{item.firstname}</td>
                                        <td>{item.licence}</td>
                                        <td>{item.club}</td>
                                        <td>
                                            <Link to='/player-detail' className='btn btn-success btn-sm'  style={{width:'100%'}}>View</Link>
                                        </td>
                                    </tr>
                                   
                                )
                            })}
                        </tbody>
                    </table>
            </div> */}
        </div>
    )
}

export default Players