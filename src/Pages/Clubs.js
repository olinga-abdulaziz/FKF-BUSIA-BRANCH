import './Css/Clubs.css'
import fkflogo from '../Images/fkflogo.png'

function Clubs() {
    return(
        <div className='CLBox'>
            <div className='CLhead'>
                <div className='LDispCard'>
                        <center>
                        <font>2300</font> <br />
                        <font>Registered Clubs</font>
                        </center>
                    </div>

                    <font className='perHead'><i class="fas fa-baseball-ball    "></i> TESO NORTH SUBCOUNTY BRANCH</font>
                        <div class="dropdown">
                            <button type="button" class="btn btn-outline-success dropdown-toggle" data-toggle="dropdown">
                                Filter Sub county
                            </button>
                            <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">TESO NORTH SUBCOUNTY BRANCH</a>
                            <a class="dropdown-item" href="#">TESO SOUTH SUBCOUNTY BRANCH</a>
                            <a class="dropdown-item" href="#">EMBAKASI EAST SUBCOUNTY BRANCH</a>
                            <a class="dropdown-item" href="#">MADHARE NORTH SUBCOUNTY </a>
                            <a class="dropdown-item" href="#">KARIOBANGI WEST SUBCOUNTY </a>
                            </div>
                        </div>
            </div>

            <div className='CLbody'>
                <div style={{display:'flex',justifyContent:'space-between',padding:'10px',backgroundColor:'white',marginTop:'10px'}}>
                    <font style={{color:'gray',fontSize:'13px',marginTop:'10px'}}>CLUBS</font>
                    <button className='btn btn-outnline-success'><i class="fas fa-plus-circle"></i> New Club</button>
                </div>
                <div class="container">
                        <table class="table">
                            <thead class="thead-dark">
                            <tr>
                                <th>No.</th>
                                <th>Logo</th>
                                <th>Club Name</th>
                                <th>Subcounty</th>
                                <th>Coach Name</th>
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
                                <td>Teso north subcounty</td>
                                <td>Peter koech</td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>
                                    <div style={{width:'30px',height:'30px'}}>
                                        <img src={fkflogo} width='100%' height='100%'/>
                                    </div>
                                </td>
                                <td>Pool Fc</td>
                                <td>Teso north subcounty</td>
                                <td>Paul karikui</td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>
                                    <div style={{width:'30px',height:'30px'}}>
                                        <img src={fkflogo} width='100%' height='100%'/>
                                    </div>
                                </td>
                                <td>Kakurkit FC</td>
                                <td>Teso north subcounty</td>
                                <td>Nelson papai</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    )
}

export default Clubs