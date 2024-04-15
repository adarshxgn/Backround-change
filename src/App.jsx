import { useState, useEffect } from 'react'
import './App.css'

 const Gchange=(e)=>{
   const body = document.querySelector("body");
   body.style.background = "green"
 }
   const Bchange=(e)=>{
    const body = document.querySelector("body");
    body.style.background = "blue"
   }  
    const Rchange=(e)=>{
      const body = document.querySelector("body");
      body.style.background = "red"
 }
function App() {
  return (
    <div style={{minHeight:'100vh',width:'100%'}} className='d-flex justify-content-center align-items-center flex-column'>
        <button onClick={Gchange} className='btn btn-success m-5'>Green</button>
        <button  onClick={Bchange}  className='btn btn-primary m-5'>Blue</button>
        <button  onClick={Rchange}  className='btn btn-danger m-5'>Red</button>
    </div>
  )
}

export default App
