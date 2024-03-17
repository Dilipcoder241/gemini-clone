import React from 'react';

function Box({title , icon}) {
  return (
    <div className='relative w-full md:w-[200px] h-[120px] md:h-[200px] rounded-lg p-3 bg-zinc-200 hover:bg-zinc-300'>
        <h1 className='capitalize '>{title}</h1>
        <div className='absolute bottom-5 right-5 text-2xl p-2 bg-zinc-400 rounded-full'>
            {icon}
        </div>
    </div>
  )
}

export default Box