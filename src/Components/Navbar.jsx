import React from 'react'

function Navbar() {
    return (
        <div className="flex justify-between items-center p-4">
            <div className="logo">
                <h1 className='text-xl'>Gemini</h1>
            </div>

            <div className="user h-[40px] w-[40px] overflow-hidden">
                <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-full w-full rounded-full object-cover object-center'/>
            </div>
        </div>
    )
}

export default Navbar