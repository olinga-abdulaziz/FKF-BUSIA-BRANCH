import * as React from 'react'
import './Css/AddClub.css'
import { useState } from 'react';
import axios from 'axios'

function AddClub() {
    const [clubname, setclubname] = useState("");
    const [abriviation, setabriviation] = useState("");
    const [home, sethome] = useState("");
    const [stadium, setstadium] = useState("");
    const [description, setdescription] = useState("");
    const [btnsubmit, setbtnsubmit] = useState("Submit");
    const [message, setmessage] = useState("");
    const [messageDisplay, setmessageDisplay] = useState("none");
    function submitForm() {
        setbtnsubmit("please wait ...")
        axios.post('https://busia-muslim-council.herokuapp.com/club/add',{
            clubname:clubname,
            abriviation:abriviation,
            home:home,
            stadium:stadium,
            description:description

        }).then((req,res)=>{
            setmessage("Club Registerd Successfully")
            setmessageDisplay("block")
            setclubname("")
            setabriviation("")
            setdescription("")
            setstadium("")
            sethome("")
            setbtnsubmit("Submit")
        }).catch((err)=>{
            setmessage(err)
            console.log(err);
            setmessageDisplay("block")
            setclubname("")
            setabriviation("")
            setdescription("")
            setstadium("")
            sethome("")
            setbtnsubmit("Submit")

        })
    }

    return(
        <div className='container contTT'>
            
            <form className='clubForm'>
            
                <h4>Register New Club</h4>
                <hr />
                    <div class="form-group">
                      <label for="" className='text-muted'>Club Name</label>
                      <input value={clubname} type="text" class="form-control" name="clubname" id="clubname" aria-describedby="helpId"  onChange={(event=>setclubname(event.target.value))} />
                    </div>
                    <div class="form-group">
                      <label for="" className='text-muted'>Abriviation</label> <br />
                      <small className='text-muted'>At least three laters that will be visible on the table</small>
                      <input value={abriviation} type="text" placeholder='eg . TNL' class="form-control" name="abriviation" id="abriviation" aria-describedby="helpId"  onChange={(event=>setabriviation(event.target.value))} />
                    </div>
                    <div class="form-group">
                      <label for="" className='text-muted'>Badge</label>
                      <input type="file" 
                        class="form-control" name="badge" id="badge" aria-describedby="helpId" placeholder="" />
                    </div>
                    <div class="form-group">
                      <label for="" className='text-muted'>Location/Home</label>
                      <input value={home} type="text" class="form-control" name="home" id="home" aria-describedby="helpId" placeholder="" onChange={(event=>sethome(event.target.value))}/>
                    </div>
                    <div class="form-group">
                      <label for="" className='text-muted'>Stadium</label>
                      <input value={stadium} type="text" class="form-control" name="stadium" id="stadium" aria-describedby="helpId" placeholder="" onChange={(event=>setstadium(event.target.value))}/>
                    </div>
                    <div class="form-group">
                      <label for="" className='text-muted'>Description</label>
                      <textarea value={description} class="form-control" name="description" id="description" rows="3" onChange={(event=>setdescription(event.target.value))}></textarea>
                    </div>
                    <input name="" id="" class="btn btn-primary form-control" type="button" value={btnsubmit} onClick={submitForm}/>
            </form>
            <div class="alert alert-success alert-dismissible" style={{display:messageDisplay}}>
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>Success!</strong> {message}
            </div>
        </div>
    )
}

export default AddClub