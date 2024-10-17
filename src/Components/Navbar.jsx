import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="flex justify-between items-center p-4 w-full">
            <div className="logo">
                <h1 className='text-xl'>Lumina</h1> 
            </div>

            <Link to="/profile" className="user h-[40px] w-[40px] overflow-hidden cursor-pointer">
                <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full rounded-full object-cover object-center'/>
            </Link>
        </div>
    )
}

export default Navbar