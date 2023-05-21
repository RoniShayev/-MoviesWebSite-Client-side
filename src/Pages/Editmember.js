import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  Link, Outlet, useNavigate, useParams} from 'react-router-dom'
import '../App.css'
import { Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

const EditmemberComp = () => {
    const [member, setMember]= useState([{name:'',email:'',city:''}])
    const params= useParams()
    let navigate=useNavigate()
    useEffect(()=>
    {
      const getdata=async()=>
      {
        let resp= await axios.get("http://localhost:8000/api/member/"+ params._id)
    
      setMember(resp.data);
   
      }
      getdata()
      
    },[])

       const update = async (e) =>
       {
           e.preventDefault()
       
           if(member.name != "")
           {
            let status=  await axios.put("http://localhost:8000/api/member/"+params._id,member)
            alert("Updated!!")
            navigate("/Main/Subcription")
           }
       }
   return (
     <div>
       <h3 style={{color:'black'}}>Edit Movie</h3>
      Name: <input type="text"  onChange={e => setMember({...member, name : e.target.value})}value= {member.name}></input><br/>
      Email:<input type="text" onChange={e => setMember({...member, email : e.target.value})}value= {member.email}></input><br/>
      City:<input type="text" onChange={e => setMember({...member, city : e.target.value})}value= {member.city}></input><br/><br/>
 
      <Button  size='small' variant="outlined" color="success" startIcon={<SaveIcon />} onClick={update}>SAVE</Button> &nbsp;
      <Link to="/Main/Subcription"><Button size='small' variant="outlined" color="success" startIcon={<SendIcon />} >CANCEL</Button></Link>
      <Outlet/>
     </div>
   )
 }


export default EditmemberComp
