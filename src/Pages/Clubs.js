import './Css/Clubs.css'
import fkflogo from '../Images/fkflogo.png'

function Clubs() {
    return(
        <div className='CLBox'>
            <div className='CLhead'>
                 <font className='perHead'><i class="fas fa-baseball-ball"></i><strong>TESO NORTH SUB-COUNTY LEAGE CLUBS</strong></font>
            </div>

            <div className='CLbody'>
                <div style={{display:'flex',justifyContent:'space-between',padding:'10px',backgroundColor:'white',marginTop:'10px'}}>
                    <font style={{color:'gray',fontSize:'13px',marginTop:'10px'}}>CLUBS</font>
                    <font style={{color:'gray',fontSize:'13px',marginTop:'10px'}}>Toatal: 26</font>
                    
                </div>
                <div class="container">
                        <table class="table">
                            <thead class="thead-dark">
                            <tr>
                                <th>No.</th>
                                <th>Logo</th>
                                <th>Club Name</th>
                                <th>Stadium</th>
                                <th>Coach Name</th>
                                <th>View</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>1.</td>
                                <td>
                                    <div style={{width:'30px',height:'30px'}}>
                                        <img src={fkflogo} width='100%' height='100%'/>
                                    </div>
                                </td>
                                <td>Sokopaka FC</td>
                                <td>Amoni pri</td>
                                <td>Peter koech</td>
                                <td><a href='/club-detail' ><button className='btn btn-success'>View</button></a></td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>
                                    <div style={{width:'30px',height:'30px'}}>
                                        <img src={fkflogo} width='100%' height='100%'/>
                                    </div>
                                </td>
                                <td>Pool Fc</td>
                                <td>Amoni pri</td>
                                <td>Paul karikui</td>
                                <td><a href='/club-detail' ><button className='btn btn-success'>View</button></a></td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>
                                    <div style={{width:'30px',height:'30px'}}>
                                        <img src={fkflogo} width='100%' height='100%'/>
                                    </div>
                                </td>
                                <td>Kakurkit FC</td>
                                <td>Kakurkit pri</td>
                                <td>Nelson papai</td>
                                <td><a href='/club-detail' ><button className='btn btn-success'>View</button></a></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}

export default Clubs