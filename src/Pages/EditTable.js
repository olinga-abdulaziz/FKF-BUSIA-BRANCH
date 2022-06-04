import * as React from 'react'
import { useLocation } from 'react-router-dom'
import  './Css/Edit.css'
function EditTable() {
    const location=useLocation()
    return (
        <div className='containerEdit'>
            <div className='formDiv'>
                <form>
                    <div className='formDivMain'>
                        <center>
                             <h3>{location.state.club}</h3>
                        </center>
                        <div className='horDiv'>
                            
                            <div>
                                <label>POS</label> <br />
                                <input type='number' className='inptForm' value={location.state.pos} />
                            </div>
                            <div>
                                <label>PLAYED (P)</label> <br />
                                <input type='number' className='inptForm' value={location.state.p} />
                            </div>
                        </div>
                        
                        <div className='horDiv'>
                                <div>
                                    <label>WIN (W)</label> <br />
                                    <input type='number' className='inptForm' value={location.state.w} />
                                </div>
                                <div>
                                    <label>LOSE (L)</label> <br />
                                    <input type='number' className='inptForm' value={location.state.l} />
                                </div>
                        </div>


                        <div className='horDiv'>
                                <div>
                                    <label>DRAW (D)</label> <br />
                                    <input type='number' className='inptForm' value={location.state.d} />
                                </div>
                                <div>
                                    <label>A</label> <br />
                                    <input type='number' className='inptForm' value={location.state.a} />
                                </div>
                        </div>
                        <div className='horDiv'>
                                <div>
                                    <label>GOAL DIFFERENCE (+-)</label> <br />
                                    <input type='number' className='inptForm' value={location.state.plm} />
                                </div>
                                <div>
                                    <label>GOAL POINTS (PTS)</label> <br />
                                    <input type='number' className='inptForm' value={location.state.pts} />
                                </div>
                        </div>
                        <button className='btn btn-primary w-100'>Update</button>
                    </div>
                </form>
            </div>            
        </div>
    )
}

export default EditTable