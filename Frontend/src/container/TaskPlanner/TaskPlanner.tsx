import * as React from 'react';
import {Route, Switch} from 'react-router-dom';

import {ActiveTasksPage} from '../../pages/ActiveTasksPage';
import {CompleteTasksPage} from '../../pages/CompleteTasksPage';
import {NewTasksPage} from '../../pages/NewTasksPage';
import {Header} from './../../components/Header';
import './TaskPlanner.css';

export class TaskPlanner extends React.Component{
    public render(){
        return(
           <div className='taskplanner'>
                <div className='taskplanner__wrapper'>
                    <Header/>
                    <Switch>
                        <Route path = '/new-task' component = {NewTasksPage}/>
                        <Route path = '/active' component = {ActiveTasksPage}/>
                        <Route path = '/complete' component = {CompleteTasksPage}/>
                    </Switch>
                </div>
           </div>
        );
    }
}