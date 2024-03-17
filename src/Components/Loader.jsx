import React from 'react'

function Loader() {
    return (
        <div className="animate-pulse w-full">
            <div className="h-2 bg-gray-300 mt-3 mb-1 rounded"></div>
            <div className="h-2 bg-gray-500 mb-1 rounded"></div>
            <div className="h-2 bg-gray-400 mb-1 rounded"></div>
        </div>
    )
}

export default Loader