import React from 'react'

function Image({ url, desc = '' }) {
    return (
        <div className="flex-2 p-2">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={url} alt={desc} />
        </div>
        
    )
}

export default Image