import { useState } from "react"
import "./TaskInput.css"

//  вводит задачу и использует метод для записи ее в state 
// очищает поле ввода для следующей задачи 
export const TaskInput = ( {saveTask} ) => {
    const [task, setTask] = useState('')
    
    return (
        <>
        <input 
            className="task-input" 
            type="text" 
            placeholder='enter your task title'
            // task edit 
            onChange={(e => {
                let text = e.target.value
                setTask(text) 
            })}
            // task save 
            onKeyDown={(e) => {
                if (e.key == "Enter") {
                    e.target.value = '';
                    saveTask( {name: task, done: false} );
                }
            }}
        />
        </>
    )
}