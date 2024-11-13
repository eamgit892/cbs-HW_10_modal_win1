import './ModalWind.css'

export const ModalWind = ( {call, onDestroy} ) => {
    
    if (!call) return null; 

    return (
        <div className="modal">
            <div className='modal-content'>
                <i className="close" onClick={onDestroy}>X</i>
                <h1>Delete record?</h1>
                <div className="btns">
                    <button className='accept'>Yes, delete</button>
                    <button className='reject'>No, keep.</button>
                </div>
            </div>
        </div>
    )
} 