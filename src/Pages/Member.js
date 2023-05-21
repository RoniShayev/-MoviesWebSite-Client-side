import React, {  useState } from 'react'
import Watchmoviecomp from './Watchmovie'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Membercomp = (props) => {
const navigate = useNavigate();
  
const edit = () =>
  {
    navigate('/Main/Subcription/'+props.member._id)

  }

  const Delete =async () =>
  {
   
    let resp= await axios.delete('http://localhost:8000/api/member/'+props.member._id)
    alert(resp.data)
    window.location.reload()
  }
   
    return ( 
    
      <div style={{ color: "blue" }}>
      <h3>{props.member.name}</h3>
        Email:{props.member.email}<br/>
        City:{props.member.city}<br/>
        <Button  size='small' variant="outlined" color="success" onClick={edit}>Edit</Button>
        <Button size='small' variant="outlined" color="success" startIcon={<DeleteIcon />} onClick={Delete}>Delete</Button>
        <div>
 
        <div>
              <Watchmoviecomp memberid={props.member._id} key={props.member._id} />
       </div>
        
        </div>
     
      </div>
    )
  }
  

export default Membercomp
