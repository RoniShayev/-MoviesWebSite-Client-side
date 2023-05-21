import React from 'react'
import '../App.css'
import {  Link, Outlet } from 'react-router-dom'
import { Button } from '@mui/material'

const Maincomp = () => {
  return (
    
    <div style={{ color: "blue" }}>
   
    <h3 style={{color:'black'}}>Welcome {sessionStorage['name']}</h3>
    <Link to="Movies"><Button size='small' variant="contained" color="secondary" >Movies Page</Button></Link> &nbsp;
    <Link to="Subcription"><Button size='small' variant="contained" color="secondary">Subcription Page</Button></Link> &nbsp;
    <Link to="Users"><Button size='small' variant="contained" color="secondary">Users</Button></Link>&nbsp;
    <Link to="/"><Button size='small' variant="contained" color="secondary" >Log Out</Button></Link>&nbsp;
   
    <Outlet/>
    </div>
  )
}

export default Maincomp
