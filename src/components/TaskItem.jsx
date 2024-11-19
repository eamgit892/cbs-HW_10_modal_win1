import './TaskItem.css'

export const TaskItem = ( {task, idx, request} ) => {
    return (
        <div className='taskItem'>
            <label>
                <input type="checkbox"></input>
                <span>{task.name}</span>
            </label>
            <button className='taskItem__edit'
            onClick={() => request( {idx: idx, action: 'modify'} )}
            >

            </button>
            <div className='taskItem__delete'
            onClick={() => 
                request( {idx: idx, action: 'delete'} )}
            >
                X 
            </div>
        </div>
    )
}