import * as React from 'react'
import './Css/admin.css'


function ControlPanel() {
    return(
        <div className='container adminConatiner'>
          
            <header className='cntHeadr'>
                <div><strong><i class="fas fa-tools"></i> Control Panel</strong></div>
                <div><strong><i class="fas fa-user-shield"></i> Echakara Moses</strong></div>
            </header>
            <section className='cntrBody'>
                <h3>As Administrator you are capable of performing various tasks :</h3>
                <small className='txt-muted'>You also have access to some previlages that a normal user does not have</small>
                <br />
                <br />
                <div className='btn-group'>
                    <button onClick={()=>window.location.href='/add-club'} className='btn btn-outline-secondary'>Register New Club</button>
                    <button  onClick={()=>window.location.href='/manage-fixture'} className='btn btn-outline-secondary'>Manage Fixtures</button>
                </div>
            </section>
        </div>
    )
}

export default ControlPanel