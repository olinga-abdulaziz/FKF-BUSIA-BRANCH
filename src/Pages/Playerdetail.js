import './Css/ClubDetail.css'
import fkflogo from '../Images/fkflogo.png'

function Playerdetail() {


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
                         <p style={{color:'gray'}}><i class="fas fa-address-card "></i>  Player Profile</p>
                         <i class="fas fa-edit    "></i>
                    </div>
                    <div style={{padding:'10px'}}>
                        <div className='detPref'>
                            <strong><label>NAME :</label></strong> <br />
                            <label>Ali Osere</label>
                        </div>
                        <div className='detPref'>
                            <strong><label>LICENCE NUMBER :</label></strong> <br />
                            <label>L23223245</label>
                        </div>
                        <div className='detPref'>
                            <strong><label>DATE OF BIRTH :</label></strong> <br />
                            <label>12/3/2001</label>
                        </div>
                    </div>
                    <div style={{padding:'10px'}}>
                         <p style={{color:'gray'}}><i class="fa fa-info-circle" aria-hidden="true"></i> Analystic Information</p>
                    </div>
                    <div style={{padding:'10px'}}>
                        <div className='detPref'>
                            <strong><label>Awards :</label></strong> <br />
                            <ul>
                                <li>Man of the match - 9</li>
                                <li>Golden boot - 3</li>
                                <li>Top scorer - 4x</li>
                            </ul>
                        </div>
                        <div className='detPref'>
                            <strong><label>Short Analysis :</label></strong> <br />
                            <ul>
                                <li>Power- 80%</li>
                                <li>Speed - 30km/h</li>
                                <li>Technique - 67%</li>
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

export default Playerdetail