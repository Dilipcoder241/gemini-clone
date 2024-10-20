import { motion } from 'framer-motion';
import React from 'react';

function Box({title , icon}) {
  
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}} className='relative w-full md:w-[200px] h-[120px] md:h-[200px] rounded-lg p-3 bg-gray-700 hover:bg-zinc-600'>
        <h1 className='capitalize '>{title}</h1>
        <div className='absolute bottom-5 right-5 text-2xl p-2 bg-gray-800 rounded-full'>
            {icon}
        </div>
    </motion.div>
  )
}

export default Box