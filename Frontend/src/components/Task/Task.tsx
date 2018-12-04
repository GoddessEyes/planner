import axios from 'axios';
import * as React from 'react';


import './Task.css';

interface ITaskProps{
    title: string,
    description: string,
    key:string,
    taskId:string
}
export const Task = ({title, description, taskId}: ITaskProps) => (
    <div className="task">
        <div className='title'>
            <button className='success' onClick={(event)=>{
                window.location.reload();
                axios.post('http://95.181.198.18:5000/success',{id:taskId})
            }}>Complete</button>
            <button>Edit</button>
            <button className='delete' onClick={(event)=>{
                window.location.reload();
                axios.post('http://95.181.198.18:5000/del',{id:taskId} )
            }}>Delete</button>
            <h3>{title}</h3>
        </div>
        <p className="task__body">{description}</p>
    </div>
);