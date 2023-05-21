import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {  Link, Outlet, useNavigate, useParams} from 'react-router-dom'
import '../App.css'
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';

const EditmovieComp = () => {
  const [movie, setMovie] = useState({name : '', genres : '', yearpremiered : '', image : ''})
  const params= useParams()
    let navigate=useNavigate()
useEffect(()=>
{
  const getdata=async()=>
  {
    let resp= await axios.get("http://localhost:8000/api/movie/"+ params._id)
  setMovie(resp.data);
  
  }
  getdata()
  
},[])

   const update = async (e) =>
   {
       e.preventDefault()
   
       if(movie.name != "")
       {
        let status=  await axios.put("http://localhost:8000/api/movie/"+params._id,movie)
        alert("Updated!!")
        navigate("/Main/Movies")
       }
   }

   return (
     <div>
       <h3 style={{color:'black'}}>Edit Movie</h3>
      Name: <input type="text"  onChange={(e) => setMovie({...movie, name : e.target.value})}value= {movie.name}></input><br/>
      Geners:<input type="text" onChange={(e) => setMovie({...movie, genres : e.target.value})}value= {movie.genres}></input><br/>
      Image URL:<input type="text" onChange={(e) => setMovie({...movie, image : e.target.value})}value= {movie.image}></input><br/>
      Year Premired:<input type="text" onChange={(e) => setMovie({...movie, yearpremiered : e.target.value})}value= {movie.yearpremiered}></input><br/> <br/>
 
      <Button size='small' variant="outlined" color="success" startIcon={<SaveIcon />} onClick={update}>SAVE</Button> &nbsp;
      <Link to="/Main/Movies"><Button size='small' variant="outlined" color="success" startIcon={<SendIcon />}>CANCEL</Button></Link>
      <Outlet/>
     </div>
   )
 }


export default EditmovieComp
