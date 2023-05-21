import React, { useState } from 'react'
import axios from 'axios'
import {  Link, Outlet, useNavigate} from 'react-router-dom'
import '../App.css'
import { Button } from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';

const Addmoviecomp = () => {
  const [movie, setMovie]= useState([{name:'',yearpremiered:'',genres:'',image:''}])
  const navigate = useNavigate()

   function save()
  {
     let resp=  axios.post("http://localhost:8000/api/movie", movie)
     setMovie(resp.data)
     alert("Added!")
     navigate("/Main/Movies")
     window.location.reload();

  }
  return (
    
               <div style={{ borderStyle : "solid" , borderColor : "MidnightBlue" , borderWidth : "4px" , color:'purple' }}>
  <h3 style={{color:'black'}}>Add Movie</h3>
     Name: <input type="text" onChange={e => setMovie({...movie, name : e.target.value})}></input><br/>
     Geners:<input type="text" onChange={e => setMovie({...movie, genres : e.target.value})}></input><br/>
     Image URL:<input type="text" onChange={e => setMovie({...movie, image : e.target.value})}></input><br/>
     Year Premired:<input type="text" onChange={e => setMovie({...movie, yearpremiered : e.target.value})}></input><br/><br/>

     <Button  size='small' variant="outlined" color="success" startIcon={<SaveIcon />} onClick={save}>SAVE</Button>&nbsp;
     <Link to="/Main/Movies"><Button  size='small' variant="outlined" color="success" startIcon={<SendIcon />} >CANCEL</Button></Link>
     <Outlet/>
    </div>
  )
}

export default Addmoviecomp
