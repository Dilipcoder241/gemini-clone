import React, { useContext } from 'react';
import { LuImagePlus } from "react-icons/lu";
import { MdMicNone } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { Context } from '../Context/Context';
import { motion } from 'framer-motion';


function PromtBar() {
  
  const {onSent , prompt , setPrompt} = useContext(Context);

  const handleSubmit= ()=>{
    onSent();
  }
  
  

  return (
    <motion.div initial={{width:0}} animate={{width:"100%"}} transition={{duration:0.8}} className='flex justify-between rounded-xl px-4 py-4 w-full bg-gray-700'>
        <input type="text" onChange={(e)=>setPrompt(e.target.value)} value={prompt} placeholder='Enter The Prompt Here' className='w-4/5 outline-none bg-transparent'/>
        <div className='text-2xl flex gap-2 md:gap-4'>
        <LuImagePlus className='cursor-pointer'/>
        <MdMicNone className='cursor-pointer'/>
        {prompt && <IoMdSend className='cursor-pointer' onClick={handleSubmit}/>}
        </div>
    </motion.div>
  )
}

export default PromtBar