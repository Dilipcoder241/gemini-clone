import React from 'react'
import GreatingCard from './GreatingCard'
import PromtBar from './PromtBar'

function Chat() {
    return (
        <div className="h-full w-[95%] md:w-3/5 m-auto pt-10 flex flex-col justify-between gap-5">
            <GreatingCard/>
            <PromtBar/>
        </div>
    )
}

export default Chat