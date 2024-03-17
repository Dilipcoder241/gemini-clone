import React, { useContext, useState } from 'react';
import { IoMenu } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import QuextionBtn from './QuextionBtn';
import { Context } from '../Context/Context';

function Sidebar() {

    const [collapse, setCollapse] = useState(true);
    const {prevPrompts , setResult} = useContext(Context);

    return (
        <div className={`hidden md:flex h-full px-4 py-6 flex-col justify-between ${collapse && "items-center"} items-start bg-zinc-200`}>
            <div className={`top h-3/4 flex flex-col ${collapse && "items-center"}`}>
                <button onClick={() => { setCollapse(prev => !prev) }} className='hover:bg-zinc-400 p-2 rounded-full w-fit'><IoMenu size={20} /></button>
                <div className='mt-10 flex gap-1 items-center bg-zinc-400 rounded-full w-fit px-2 py-2'>
                    <button className='flex gap-1 items-center' onClick={()=>{setResult("")}}><MdAdd size={20} />
                    {!collapse && <p className='pr-2'>New Chat</p>}
                    </button>
                </div>

                {!collapse && <div className='recent mt-5 h-[50%]'>
                    <p>Recent</p>
                    <hr className='border-zinc-400 mb-5' />
                    <div className='overflow-y-scroll h-full'>
                        {prevPrompts.map((q,i)=>(<QuextionBtn key={i} question={q}/>))}
                    </div>
                </div>}
            </div>
            <div className='bottom'>
                <div className="icon flex items-center gap-4 my-4">
                    <FaRegCircleQuestion size={22} />
                    {!collapse && <p>Help</p>}
                </div>
                <div className="icon flex items-center gap-4 my-4">
                    <FaClockRotateLeft size={22} />
                    {!collapse && <p>Activity</p>}
                </div>
                <div className="icon flex items-center gap-4 my-4">
                    <MdOutlineSettings size={22} />
                    {!collapse && <p>Settings</p>}
                </div>
            </div>
        </div>
    )
}

export default Sidebar