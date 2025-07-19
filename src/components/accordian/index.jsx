import { useState } from 'react'
import data from './data.js'
import './styles.css'
export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])
    
    const handleSingleSelection = (id) => {
        setSelected(id)
    }

    const hanleMultiSelection = (id) => {
        let copyMul = [...multiple]
        const findIndex = copyMul.indexOf(id)
        if(findIndex === -1) {
            copyMul.push(id)
        } else {
            copyMul.splice(findIndex, 1)
        }
        setMultiple(copyMul)
        console.log(copyMul)
    }

    return(
        <div className="wrapper">
            <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>Enable Multi Selection</button>
        <div className="accordian">
            {
                        data && data.length > 0 ? 
                            data.map(dataItem => (
                                <>
                                <div className="item" onClick={ enableMultiSelection ? () => hanleMultiSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)}>
                                    <h3>{dataItem.question}</h3>
                                    <span>+</span>
                                </div> 
                                {
                                    selected === (dataItem.id || dataItem.indexOf(dataItem.id !== -1)) ? <div>{dataItem.answer}</div> : null
                                    }
                                </>
                            )) : <div>No data found!</div>
            }  
        </div>
    </div >
    )
}