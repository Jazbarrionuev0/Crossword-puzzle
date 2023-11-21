"use client"

import React from 'react'

const Cell = ({coord}:{coord:string}) => {
    return (
        <div className='cell-component' onClick={()=> {alert(coord)}}>
            x
        </div>
    )
}

export default Cell