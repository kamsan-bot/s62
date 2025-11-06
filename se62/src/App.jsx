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
    <main className='container tw-my-8'>
      <h1 className='tw-text-2x1 tw-font-bold tw-mb-4'> titulo </h1>
      <button
      className='btn btn-secondary tw-mb-4'
      type='button'
      data-bs-toogle="tooltip"
      data-bs-placement="right"
      data-bs-tittle="este mensaje aparece cuando se mueve el mouse"
      >
        mueve el mouse
      </button>
      <section className='tw-grid tw-grid-col-1 md:tw-grid-cols-3 tw-gap-6'>
        <Democard/>
        <Democard/>
        <Democard/>
      </section>
    </main>
    </>
  )
}

export default App