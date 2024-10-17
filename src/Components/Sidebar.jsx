import React, { useContext } from 'react';
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineSettings } from "react-icons/md";
import QuextionBtn from './QuextionBtn';
import { Context } from '../Context/Context';
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";


function Sidebar({ setShowSidebar }) {
    const { prevPrompts, setResult } = useContext(Context);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className={`flex h-full w-full px-4 py-6 flex-col justify-between items-start`}>
            <div className={`top h-3/4 flex flex-col w-full`}>
                <div className="logo flex justify-between w-full">
                    <h1 className='text-xl'>Lumina</h1>
                    <button onClick={() => { setShowSidebar(prev => !prev) }} className='hover:bg-zinc-500 hover:text-white p-2 rounded-full w-fit'><IoClose size={20} /></button>
                </div>
                <div className="relative group w-fit my-5 rounded-xl">
                    <div
                        className="absolute transitiona-all duration-1000 opacity-0 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                    </div>
                    <button
                        className="relative inline-flex gap-1 items-center justify-center px-3 py-3 text-sm font-bold text-gray-400 hover:text-white transition-all duration-200 bg-gray-700 font-pj rounded-full"
                        role="button"> New Chat
                    </button>
                </div>  

                <div className='recent mt-5 h-[50%]'>
                    <p>Recent</p>
                    <hr className='border-zinc-400 mb-5' />
                    <div className='overflow-y-scroll h-full'>
                        {prevPrompts.map((q, i) => (<QuextionBtn key={i} question={q} />))}
                    </div>
                </div>
            </div>
            <div className='bottom'>
                <div className="icon flex items-center gap-4 my-4">
                    <FaRegCircleQuestion size={22} />
                    <p>Help</p>
                </div>
                <div className="icon flex items-center gap-4 my-4">
                    <FaClockRotateLeft size={22} />
                    <p>Activity</p>
                </div>
                <div className="icon flex items-center gap-4 my-4">
                    <MdOutlineSettings size={22} />
                    <p>Settings</p>
                </div>
            </div>
        </motion.div>
    )
}

export default Sidebar