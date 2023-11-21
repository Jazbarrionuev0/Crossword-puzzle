import React from 'react'
import Cell from '../cell/Cell'
import { coords } from '@/utils/coords'

const CellContainer = () => {

    let output:React.JSX.Element[] = []

    for (let i = 0; i < 36; i++) {
        //llenar el array output con componente Cell
        output.push(<Cell key={i} coord={coords[i]}/>)
    }
    
    return (
        <div className="cells-container">
            {output}
        </div>
    )
}

export default CellContainer