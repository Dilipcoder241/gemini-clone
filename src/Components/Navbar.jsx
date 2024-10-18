import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../Context/Context'

function Navbar() {

    const {userData} = useContext(Context);
    return (
        <div className="flex justify-between items-center p-4 w-full">
            <div className="logo">
                <h1 className='text-xl'>Lumina</h1> 
            </div>

            <Link to="/profile" className="user h-[40px] w-[40px] overflow-hidden cursor-pointer">
                {userData?.photo?.length > 0 ?<img src={userData?.photo} height={50} width={50} alt="p1" className="w-full h-full object-conver object-center rounded-full" />:<div className='text-xl  border-2  rounded-full capitalize bg-gray-900 text-white w-full h-full flex items-center justify-center pb-1'><p>d</p></div>}
            </Link>
        </div>
    )
}

export default Navbar