import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Subscribercomp from './Subscriber'
import '../App.css'
import { Button  } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

const Moviecomp = (props) => {
const navigate= useNavigate()
 const edit = () =>
  {
    navigate('/Main/Movie/'+props.mov._id)

  }

  const Delete =async () =>
  {
    let resp= await axios.delete('http://localhost:8000/api/movie/'+props.mov._id)
    alert(resp.data)
    window.location.reload()
  }
  
  return (
    <div >
      
          <div style={{  color: "red" }}>
            
              <h3>{props.mov.name}, {props.mov.yearpremiered}</h3>
                Generes:{props.mov.genres+" "}<br/> <br/>
                <img width={100} src={props.mov.image}/> <br/>
                <br/>
                <div>       
                
                </div>
                <Button size='small' variant="outlined" color="success" onClick={edit}>Edit</Button>
                <Button size='small' variant="outlined" color="success" startIcon={<DeleteIcon />} onClick={Delete}>Delete</Button>
               </div>

               <div style={{ borderStyle : "solid" , borderColor : "MidnightBlue" , borderWidth : "4px" }}>
     
                        {
                         <Subscribercomp movieid={props.mov._id}  key={props.mov._id} />

                        }
           </div>

    </div>
  )
}

export default Moviecomp

