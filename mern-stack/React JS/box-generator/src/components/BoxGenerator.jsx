import React, { useState } from 'react'

const BoxGenerator = () => {
    const [boxes, setBoxes] = useState([]);
    const [color, setColor] = useState("");
    
    const createBox = () => {
        const temp = [...boxes, color]; //shallow copy of boxes, but adding new elements too
        setBoxes(temp)
        
    }
    const reset = () => {
        const temp = []
        setBoxes(temp)
    }
    const undo = () => {
        const temp = [...boxes]
        temp.splice(-1)
        setBoxes(temp)
    }

    return (
    <>
        <div className='container'>
            <label>Color: </label> 
            <input type="text" value={color} onChange={ (e) =>{setColor(e.target.value)}} />
            <button onClick={(e) => createBox()}> Add </button>
            <button onClick={(e) => reset()}> Clear </button>
            <button onClick={(e) => undo()}> Undo </button>
        </div>
        <div className='boxesContainer'>
        {boxes.map(box => 
        (<div className='box' style={{backgroundColor: box}}></div>)
        )}
        </div>

    </>
  )
}

export default BoxGenerator
