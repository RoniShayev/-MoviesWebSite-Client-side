import React, { useEffect, useState } from 'react'
import {  Link, Outlet} from 'react-router-dom'
import '../App.css'

import axios from 'axios'
import { Button } from '@mui/material'
const Userscomp = () => {
  
 const [user, setUser]= useState([{fullname: '', password:'',username:''}])

    useEffect(()=>
    {
      async function getdata()
        {
          let resp= await axios.get("http://localhost:8000/api/user")
          setUser(resp.data)
    
        }
        getdata()
        
    },[])
  
 
  return ( 
  
      <div>
      <h3>Users</h3>
      <Link to=""><Button  size='small' variant="contained" >All Users</Button></Link>
   
   <Outlet/>


<ul>
                {
                  user.map(x=>
                    {
                      return <li key={x._id}> Full Name : {x.fullname} <br/>
                       Password : {x.password}<br/>
                       User Name : {x.username}<br/>
                       <br/>

                      </li>
                   
                    })  }
                
                
                </ul>  

      </div>
   
   
   
  )
}

export default Userscomp
