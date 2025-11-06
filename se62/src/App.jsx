import React from 'react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Democard from './components/DemoCard'
import { Tooltip } from 'bootstrap'

function App() {

  useEffect(() => {
  const nodes = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  const instances = nodes.map((el)=> new Tooltip(el))

  return()=>{
    instances.forEach((inst)=>inst.dispose())
  } 
},[])

  return (
    <>
    <Navbar/>
    <div>

    </div>
    </>
  )
}

export default App