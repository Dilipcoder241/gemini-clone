import React, { useContext } from 'react'
import Box from './Box'
import { FaRegCompass } from "react-icons/fa";
import { PiBracketsAngleBold } from "react-icons/pi";
import { MdDraw } from "react-icons/md";
import { Context } from '../Context/Context';
import { BsStars } from "react-icons/bs";
import Loader from './Loader';
import { motion } from 'framer-motion';

function GreatingCard() {

  const { result, loading , prevQuestion , showresult} = useContext(Context);
  return (
    <div>

      {!showresult ? <>
        <motion.h1 initial={{x:300, opacity:0}} animate={{x:0 , opacity:1}} transition={{duration:0.6}} className='text-[9vw] md:text-[5vw] font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text leading-none'>Hello, User</motion.h1>
        <motion.p initial={{x:300}} animate={{x:0}} transition={{duration:0.8}} className='text-[4vw] font-semibold text-zinc-500 leading-none'>How can I Help You Today?</motion.p>

        <div className="boxes md:flex-row flex gap-1 md:gap-3 mt-2 md:mt-16 flex-col">
          <Box title="suggest beaches to visit in city, including details" icon={<FaRegCompass />} />
          <Box title="Generate four unit tests for the following C# function" icon={<PiBracketsAngleBold />} />
          <Box title="Help me craft a text response to a friend" icon={<MdDraw />} />
          <Box title="Provide questions to help me prepare interview." icon={<MdDraw />} />
        </div>
      </> :
        <>
          <div className='h-[65vh] overflow-y-scroll'>
            <div className='flex gap-5 items-start mb-4'>
                <img src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-10 h-10 object-cover rounded-full'/>
                <h1 className='font-semibold capitalize'>{prevQuestion}</h1>
            </div>
            <div className='flex gap-8 items-start'>
              <BsStars className='text-2xl text-violet-500'/>
              {loading? <Loader/> : <p className='w-full text-wrap' dangerouslySetInnerHTML={{__html:result}}></p>}
            </div>
          </div>
        </>}
    </div>
  )
}

export default GreatingCard