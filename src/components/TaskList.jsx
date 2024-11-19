import './TaskList.css'
import { TaskItem } from './TaskItem';

export const TaskList = ( {tlist, req} ) => {
    console.log('got tslist', tlist)
    return (

            <ul className="task-wrapper__task-list">
                {tlist.map( (t, idx) => {
                    return <li key={idx}>
                                <TaskItem 
                                    task={t} 
                                    idx={idx}
                                    request={req}
                                /></li>
                } )}
            </ul>
    );
}