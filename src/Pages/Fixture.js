import '../Pages/Css/fixtures.css';
import fkflogo from '../Images/fkflogo.png'
import { Link } from 'react-router-dom';

function Fixtures() {
    return (
<div className="container">
<section className='fixtContDiv'>           
    <div className='fixturesDiv'>
                        <div className='CLhead'>
                            <br />
                            <div class="jumbotron jumbotron-fluid">
                                <div class="container">
                                    <h4>FIXTURE 2022/2023</h4>
                                </div>
                            </div>
                        </div>
        <Link to='manage-fixture' className='btn btn-info'>Manage Fixture</Link>
    <article className='weekFixt'>           
        <div style={{paddingLeft:'10px'}}><small className='text-muted'>Week 1</small></div>
        <div id="accordion">
            <div class="card cdfix">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseOne">
                        <div className='cdLBox'>
                            <font>Pool Fc</font>
                            <font>Vs</font>
                            <font>Kabkara Fc</font>
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                        <div style={{color:'green'}}>
                            <small>Sunday 3/4/2022</small>
                        </div>
                    </a>
                </div>

                <div id="collapseOne" class="collapse show" data-parent="#accordion">
                    <div class="card-body">
                     <div className='expdetail'>
                        <font>Venue </font>
                        <font>Kabkara primary </font>
                     </div>
                     <div className='expdetail'>
                        <font>Time </font>
                        <font>13:00 pm </font>
                     </div>
                    </div>
                </div>
            </div>
            <div class="card cdfix">
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapse6">
                        <div className='cdLBox'>
                            <font>Pool Fc</font>
                            <font>Vs</font>
                            <font>Kabkara Fc</font>
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                        <div style={{color:'green'}}>
                            <small>Sunday 3/4/2022</small>
                        </div>
                    </a>
                </div>

                <div id="collapse6" class="collapse show" data-parent="#accordion">
                    <div class="card-body">
                     <div className='expdetail'>
                        <font>Venue </font>
                        <font>Kabkara primary </font>
                     </div>
                     <div className='expdetail'>
                        <font>Time </font>
                        <font>13:00 pm </font>
                     </div>
                    </div>
                </div>
            </div>


        </div>
    </article>

    <article className='weekFixt'>           
        <div style={{paddingLeft:'10px'}}><small className='text-muted'>Week 2</small></div>
        <div id="accordion">
            <div class="card cdfix" >
                <div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapseTwo">
                        <div className='cdLBox'>
                            <font>Pool Fc</font>
                            <font>Vs</font>
                            <font>Kabkara Fc</font>
                            <i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                        </div>
                        <div style={{color:'green'}}>
                            <small>Sunday 3/4/2022</small>
                        </div>
                    </a>
                </div>

                <div id="collapseTwo" class="collapse show" data-parent="#accordion">
                    <div class="card-body">
                    <div className='expdetail'>
                        <font>Venue </font>
                        <font>Kabkara primary </font>
                     </div>
                     <div className='expdetail'>
                        <font>Time </font>
                        <font>13:00 pm </font>
                     </div>
                    </div>
                </div>
            </div>
            


        </div>
    </article>
                
</div>
</section>
        </div>
    )
}

export default Fixtures;