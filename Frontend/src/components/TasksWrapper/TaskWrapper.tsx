import * as React from 'react';

import './TaskWrapper.css';

interface ITasksWrapperProps{
    children: React.ReactNode;
}

export const TasksWrapper = ({children}:ITasksWrapperProps) =>(
    <div className="tasks-wrapper">
        <ul className = 'tasks__list'>
            {children}
        </ul>
    </div>
);