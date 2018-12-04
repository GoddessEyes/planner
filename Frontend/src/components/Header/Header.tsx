import * as React from 'react';
import {NavLink} from 'react-router-dom';

import './Header.css';

export const Header = () => (
    <header className='header'>
        <h1>Best Task Planner Ever</h1>
        <nav>
            <ul className = 'navigation'>
                <NavLink className='link' to='/active'>To active tasks</NavLink>
                <NavLink className='link' to='/new-task'>Create new task</NavLink>
                <NavLink className='link' to='/complete'>To complete tasks</NavLink>   
            </ul>
        </nav>
    </header>
);