import playercss from './Css/results.css'
import { Link } from 'react-router-dom'
import fkflogo from '../Images/fkflogo.png'

function Results() {
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
            
            <div className='LLhead'>
                <strong>TESO NORTH SUB-COUNTY LEAGE RESULTS</strong>
            </div>

            <div className='LLBody'>
                <div className='resultBody'>
                    <article className='resultItem'>
                        <div className='art1'>
                            <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                            </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Pool Fc</font>
                            </div>
                            <strong className='goals'>3</strong>
                        </div>
                        <div className='art2'>
                        <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                        </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Kabkara Fc</font>
                            </div>
                            <strong className='goals'>2</strong>
                        </div>
                    </article>
                    <section className='dateTimeRes'>
                        <small>SUN 12/3/2022 1:00 pm</small>
                    </section>

                    <article className='resultItem'>
                        <div className='art1'>
                            <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                            </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>BlackStarts Fc</font>
                            </div>
                            <strong className='goals'>1</strong>
                        </div>
                        <div className='art2'>
                        <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                        </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Aboloi Fc</font>
                            </div>
                            <strong className='goals'>0</strong>
                        </div>
                    </article>
                    <section className='dateTimeRes'>
                        <small>SUN 12/3/2022 1:00 pm</small>
                    </section>

                    <article className='resultItem'>
                        <div className='art1'>
                            <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                            </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Kangelemge Fc</font>
                            </div>
                            <strong className='goals'>2</strong>
                        </div>
                        <div className='art2'>
                        <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                        </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Legends Fc</font>
                            </div>
                            <strong className='goals'>2</strong>
                        </div>
                    </article>
                    <section className='dateTimeRes'>
                        <small>SUN 12/3/2022 1:00 pm</small>
                    </section>

                    <article className='resultItem'>
                        <div className='art1'>
                            <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                            </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Okuleu Fc</font>
                            </div>
                            <strong className='goals'>0</strong>
                        </div>
                        <div className='art2'>
                        <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                        </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Akolong Fc</font>
                            </div>
                            <strong className='goals'>4</strong>
                        </div>
                    </article>
                    <section className='dateTimeRes'>
                        <small>SUN 12/3/2022 1:00 pm</small>
                    </section>

                    <article className='resultItem'>
                        <div className='art1'>
                            <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                            </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Kocholia Fc</font>
                            </div>
                            <strong className='goals'>1</strong>
                        </div>
                        <div className='art2'>
                        <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                        </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Katakwa Fc</font>
                            </div>
                            <strong className='goals'>0</strong>
                        </div>
                    </article>
                    <section className='dateTimeRes'>
                        <small>SUN 12/3/2022 1:00 pm</small>
                    </section>

                    <article className='resultItem'>
                        <div className='art1'>
                            <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                            </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Adanya Fc</font>
                            </div>
                            <strong className='goals'>3</strong>
                        </div>
                        <div className='art2'>
                        <div className='artImgDiv'>
                                <img src={fkflogo} width={'100%'} height='100%' />
                        </div>
                            <div className='clbNDiv'>
                                <font className='clbName'>Koruruma Fc</font>
                            </div>
                            <strong className='goals'>3</strong>
                        </div>
                    </article>
                    <section className='dateTimeRes'>
                        <small>SUN 12/3/2022 1:00 pm</small>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Results