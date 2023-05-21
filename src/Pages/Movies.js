import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  Link, Outlet} from 'react-router-dom'
import Moviecomp from './Movie'
import '../App.css'
import { Button } from '@mui/material'

const Moviescomp = () => { 

  const [movie, setMovie]= useState([])
  const [result, setresult] = useState([])
  const [name , setname] = useState('')

  useEffect(()=>
  {
    async function getdata()
      {
        let resp= await axios.get("http://localhost:8000/api/movie")
        setMovie(resp.data)
        setresult(resp.data)
      }
      getdata()
  },[])
 
  const findMovie = () =>
  {
    let arr =  movie.filter(x=>x.name.includes(name))
    setMovie(arr)
       if (name.length == 0)
        {
         setMovie(result)
         
        }
       }
 
  return (

    <div className="App">
      
      <div>
 <h3 style={{color:'purple'}}>Movies Page</h3>
 
  <Link to=""><Button  size='small' variant="contained" >All Movies</Button></Link>&nbsp;
   <Link to="Addmovie"><Button  size='small' variant="contained" >Add Movie</Button></Link> &nbsp;&nbsp;
   <Outlet/>

     <input type="text" placeholder="Search..." onKeyUp={findMovie} onChange={(e)=>setname(e.target.value)}></input>
     <Button  size='small' variant="contained" onClick={() => findMovie() }>Search</Button> 
     
{
  movie.map((x,index)=>
  {
    return <Moviecomp mov={x}  key={index} />
  })
}

 </div> <br/>

</div>   
  )
}

export default Moviescomp
