import React from 'react'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark tw-py-2'>
        <div className='container fluid'>
            <a className='navbar-brand' href='A'>mi proyecto</a>
            <button 
            className=''
            type="button"
            data-bs-toogle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar">
                <span className=''>

                </span>
            </button>
        </div>
    </nav>
  )
}

export default Navbar