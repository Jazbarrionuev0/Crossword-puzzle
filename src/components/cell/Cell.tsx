"use client"

import React from 'react'

interface Props {
    coord: string;
}

const Cell: React.FC<Props> = ({ coord }) => {
    return (
        <div className='cell-component' onClick={() => { alert(coord) }}>
            x
        </div>
    )
}

export default Cell