import * as React from 'react'
import './Css/addresult.css'
import { Link,useLocation,useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { display } from '@mui/system';


function AddResult() {

    const location = useLocation();

    const [hometeam, sethometeam] = useState("");
    const [awayteam, setawayteam] = useState("");
    const [gameid, setgameid] = useState("");
    const [showMessage, setshowMessage] = useState("none");
    const [btntext, setbtntext] = useState("Save");
    const [btnComplete, setbtnComplete] = useState("Confirm");


    const [homename, sethomename] = useState('');
    const [p, setp] = useState('');
    const [w, setw] = useState('');
    const [d, setd] = useState('');
    const [l, setl] = useState('');
    const [f, setf] = useState('');
    const [ga, setga] = useState('');
    const [gd, setgd] = useState('');
    const [pts, setpts] = useState('');

    const [awayname, setawayname] = useState('');
    const [p1, setp1] = useState('');
    const [w1, setw1] = useState('');
    const [d1, setd1] = useState('');
    const [l1, setl1] = useState('');
    const [f1, setf1] = useState('');
    const [ga1, setga1] = useState('');
    const [gd1, setgd1] = useState('');
    const [pts1, setpts1] = useState('');
    const [showPopup, setshowPopup] = useState("none");

    // home team table hooks
    const [hmData, sethmData] = useState([]);
    // away team hooks
    const [awData, setawData] = useState([]);

 
    useEffect(()=>{
        setgameid(location.state.id)  
    },[])

    useEffect(()=>{
        
        axios.put(`https://busia-muslim-council.herokuapp.com/club/game-table/${homename}`,{
            p:p,
            w:w,
            d:d,
            l:l,
            f:f,
            pts:pts,
            ga:ga
        }).then((res)=>{      
                
        }).catch((err)=>{

        })
    },[p,w,d,f,l,ga,gd,pts,p1,w1,d1,l1,f1,ga1,pts1])

    useEffect(()=>{
            
            axios.put(`https://busia-muslim-council.herokuapp.com/club/game-table/${awayname}`,{
                p:p1,
                w:w1,
                d:d1,
                l:l1,
                f:f1,
                pts:pts1,
                ga:ga1
            }).then((res)=>{

                window.location.href = "/";
            }).catch((err)=>{

            })           
        
    },[p1,w1,d1,l1,f1,ga1,pts1])

   function UpdateTable(){
    setbtnComplete("Confirming ...")

        hmData.map((item)=>{
                if (hometeam == awayteam) {
                    // hometeam
                    sethomename(item.clubname)
                    setp(item.p + 1)
                    setw(item.w + 0)
                    setd(item.d + 1)
                    setl(item.l + 0)
                    setf(item.f + parseInt(hometeam))
                    setga(item.ga + parseInt(awayteam))
                    setpts(item.pts + 1)
                }else if (hometeam > awayteam){
                    //home team
                    sethomename(item.clubname)
                    setp(item.p + 1)
                    setw(item.w + 1)
                    setd(item.d + 0)
                    setl(item.l + 0)
                    setf(item.f + parseInt(hometeam))
                    setga(item.ga + parseInt(awayteam))
                    setpts(item.pts + 3)
                }else{    
                     //home team
                     sethomename(item.clubname)
                     setp(item.p + 1)
                     setw(item.w + 0)
                     setd(item.d + 0)
                     setl(item.l + 1)
                     setf(item.f + parseInt(hometeam))
                     setga(item.ga + parseInt(awayteam))
                     setpts(item.pts + 0)
                }

            })

            awData.map((item)=>{
                if (hometeam == awayteam) {
                    //away team
                    setawayname(item.clubname)
                    setp1(item.p + 1)
                    setw1(item.w + 0)
                    setd1(item.d + 1)
                    setl1(item.l + 0)
                    setf1(item.f + parseInt(awayteam))
                    setga1(item.ga + parseInt(hometeam))
                    setpts1(item.pts + 1)
                    }else if (hometeam > awayteam){
                        //away team
                        setawayname(item.clubname)
                        setp1(item.p + 1)
                        setw1(item.w + 0)
                        setd1(item.d + 0)
                        setl1(item.l + 1)
                        setf1(item.f + parseInt(awayteam))
                        setga1(item.ga + parseInt(hometeam))
                        setpts1(item.pts + 0)
                    }else{
                        //away team
                        setawayname(item.clubname)
                        setp1(item.p + 1)
                        setw1(item.w + 1)
                        setd1(item.d + 0)
                        setl1(item.l + 0)
                        setf1(item.f + parseInt(awayteam))
                        setga1(item.ga + parseInt(hometeam))
                        setpts1(item.pts + 3)


                    }                                                   
            })


    }


    function addMyresult(id,hmt,awt) {
        setbtntext("Initializing ...")
        axios.put(`https://busia-muslim-council.herokuapp.com/club/game/${id}`,{
            htr:hometeam,
            atr:awayteam
        }).then((res)=>{
            setshowMessage("block")
            
            
            axios.get(`https://busia-muslim-council.herokuapp.com/club/club/${hmt}`).then((res)=>{
                setshowMessage("block")
                setbtntext("Redirecting ..")
                setshowPopup("block")
                var myhomed=res.data
                // setting homedata
                sethmData(myhomed)
                axios.get(`https://busia-muslim-council.herokuapp.com/club/club/${awt}`).then((res)=>{
                    setshowMessage("block")
                    setbtntext("Save")
                    setshowPopup("block")
                    var myawayd=res.data
                    // set away data
                    setawData(myawayd)
                    // showing popup
                    setshowPopup("block")
                }).catch((err)=>{
                    console.log(err);
                }) 

            }).catch((err)=>{
                console.log(err);
            }) 
        }).catch((err)=>{
            console.log(err);
        }) 
    }
    return(
        <div className='addresContainer'>
            <br />
            <br />
            <br />        
            <form className='resultForm'>
                <div class="form-group">
                  <label for="">{location.state.hometeam}</label>
                  <input type="number" className="form-control" name="" required id="" aria-describedby="helpId" placeholder="" onChange={(event)=>sethometeam(event.target.value)}/>
                </div>
                <div class="form-group">
                  <label for="">{location.state.awayteam}</label>
                  <input type="number" className="form-control" name="" required id="" aria-describedby="helpId" placeholder="" onChange={(event)=>setawayteam(event.target.value)}/>
                </div>
                <div class="form-group">
                  <input  type="button" className="btn btn-info" value={btntext} name="" id="" aria-describedby="helpId" placeholder="" onClick={()=>addMyresult(gameid,location.state.hometeam,location.state.awayteam)}/>
                </div>
            </form>
            <div style={{display:showPopup}}>
                <div className='popupSection'>
                    <center><small>Initializion was Successfully please Confirm</small></center>
                <center> <button onClick={()=>UpdateTable()} className='btn btn-success btnss'>{btnComplete}</button></center>
                </div>
            </div>
        
        </div>
    )
}




export default AddResult