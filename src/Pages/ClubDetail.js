import './Css/ClubDetail.css'
import fkflogo from '../Images/fkflogo.png'

function ClubDetail() {


    return(
        <div className='CLBox'>
            <div className='CDetailLhead'>
                <div className='chead1'>
                    <div style={{marginLeft:'auto',marginRight:'auto'}}>
                        <div style={{width:'10rem',height:'10rem'}}>
                            <img src={fkflogo}  className='imgLogo'/>
                        </div>
                        <br />
                        <br />
                        <font className='CLtitle'>Teso north legends FC</font>
                    </div>
                </div>
                <div className='chead2'>
                     <p>Teso north legends football club. we are the champions.forwad always and backward never is our slogan,Teso north legends football club. we are the champions.forwad always and backward never is our slogan,Teso north legends football club. we are the champions.forwad always and backward never is our slogan</p>
                </div>
               
            </div>
            
            <div className='CDetailBody'>
                <div className='CDeta1'>
                    <div style={{padding:'10px',justifyContent:'space-between',display:'flex'}}>
                         <p style={{color:'gray'}}><i class="fas fa-address-card "></i>  Club Profile</p>
                         <i class="fas fa-edit    "></i>
                    </div>
                    <div style={{padding:'10px'}}>
                        <div className='detPref'>
                            <strong><label>NAME :</label></strong> <br />
                            <label>Teso north legends</label>
                        </div>
                        <div className='detPref'>
                            <strong><label>SLOGAN :</label></strong> <br />
                            <label>Forwad ever backward never</label>
                        </div>
                        <div className='detPref'>
                            <strong><label>STADIUM :</label></strong> <br />
                            <label>Malaba stadium</label>
                        </div>
                    </div>
                    <div style={{padding:'10px'}}>
                         <p style={{color:'gray'}}><i class="fa fa-info-circle" aria-hidden="true"></i> Club Information</p>
                    </div>
                    <div style={{padding:'10px'}}>
                        <div className='detPref'>
                            <strong><label>COACHES :</label></strong> <br />
                            <ul>
                                <li>Moses kuria</li>
                                <li>Jackob karimi</li>
                                <li>Patric jiongo</li>
                            </ul>
                        </div>
                        <div className='detPref'>
                            <strong><label>BOARD MANAGEMENT :</label></strong> <br />
                            <ul>
                                <li>Bishop kelly murunga- CEO</li>
                                <li>Mwalimu tom obarry -Treasurer</li>
                                <li>Patric jiongo - Transport manager</li>
                                <li>Patric jiongo - Transport manager</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='CDeta2'>
                    <div className='eHead'>
                        <div style={{padding:'10px'}}>
                            <p style={{color:'gray'}}><i class="fas fa-users"></i> Players list</p>
                        </div>
                        <button className='btn btn-successjk' style={{height:'30px',marginTop:'10px'}}><i class="fa fa-plus-circle" aria-hidden="true"></i> New</button>
                    </div>
                    <div class="container">        
                        <table class="table table-dark">
                            <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>License No.</th>
                                <th>Edit</th>
                                <th>Remove</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{color:'gray'}}>
                                <td>John</td>
                                <td>Doe</td>
                                <td>KKFTSN/222389</td>
                                <td><i class="fas fa-edit    "></i></td>
                                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr style={{color:'gray'}}>
                                <td>Mary</td>
                                <td>Moe</td>
                                <td>KKFTSN/222323</td>
                                <td><i class="fas fa-edit    "></i></td>
                                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr style={{color:'gray'}}>
                                <td>July</td>
                                <td>Dooley</td>
                                <td>KKFTSN/222389</td>
                                <td><i class="fas fa-edit    "></i></td>
                                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr style={{color:'gray'}}>
                                <td>July</td>
                                <td>Dooley</td>
                                <td>KKFTSN/222389</td>
                                <td><i class="fas fa-edit    "></i></td>
                                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr style={{color:'gray'}}>
                                <td>Kalulu</td>
                                <td>Dooley</td>
                                <td>KKFTSN/222389</td>
                                <td><i class="fas fa-edit    "></i></td>
                                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr style={{color:'gray'}}>
                                <td>Joshua</td>
                                <td>Dooley</td>
                                <td>KKFTSN/222389</td>
                                <td><i class="fas fa-edit    "></i></td>
                                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            <tr style={{color:'gray'}}>
                                <td>Belly</td>
                                <td>Dooley</td>
                                <td>KKFTSN/222389</td>
                                <td><i class="fas fa-edit    "></i></td>
                                <td><i class="fa fa-trash" aria-hidden="true"></i></td>
                            </tr>
                            </tbody>
                        </table>
                        </div>
                </div>
            </div>  
        </div>
    )
}

export default ClubDetail