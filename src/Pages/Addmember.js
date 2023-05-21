import React, { useState } from 'react'
import axios from 'axios'
import {  Link, Outlet, useNavigate} from 'react-router-dom'
import '../App.css'
import {Button} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

const Addmembercomp = () => {
  const [member, setMember]= useState([{name:'',email:'',city:''}])
  const navigate = useNavigate();
  function save()
  {
     let resp=  axios.post("http://localhost:8000/api/member", member)
     setMember(resp.data)
     alert("Added!")
     navigate("/Main/Subcription")
     window.location.reload();

  }
  return (
    <div style={{ borderStyle : "solid" , borderColor : "MidnightBlue" , borderWidth : "4px" , color:'purple'}}>
    <h3 style={{color:'black'}}>Add Member</h3>
     Name: <input type="text" onChange={e => setMember({...member, name : e.target.value})}></input><br/>
     Email:<input type="text" onChange={e => setMember({...member, email : e.target.value})}></input><br/>
     City<input type="text" onChange={e => setMember({...member, city : e.target.value})}></input><br/><br/>
     

     <Button  size='small' variant="outlined" color="success" startIcon={<SaveIcon />} onClick={save}>SAVE</Button>&nbsp;
     <Link to="/Main/Subcription"><Button  size='small' variant="outlined" color="success" startIcon={<SendIcon />} >CANCEL</Button></Link>
     <Outlet/>
    </div>
  )
}

export default Addmembercomp
