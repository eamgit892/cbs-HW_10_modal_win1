import { useState } from 'react';
import './ModalDelete.css'

export const ModalModify = ( {flag, change, quit} ) => {
    
    const [input, setInput] = useState('')

    if (!flag) return null;

    return (
        <div className="modalDelete">
            
            <label>
                Enter new task value:

                <input type="text"
                 onInput={(e) => {                    
                    setInput(e.target.value) }
                 } />
            </label>

            <div>
                <button onClick={ () => {
                    change(input)
                    quit()
                }
                    }>Change
                </button>
                <button onClick={quit}>Cancel</button>
            </div>
        </div>
    )
}