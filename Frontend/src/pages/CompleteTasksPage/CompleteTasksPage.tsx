import axios from 'axios';
import * as React from 'react';


import {Task} from '../../components/Task';
import {TasksWrapper} from '../../components/TasksWrapper';
import {PageTemplate} from '../../pages/PageTemplate';
import './CompleteTasksPage.css';

interface ITask{
    title:string,
    des:string,
    idPost:'string'
}


export class CompleteTasksPage extends React.Component{

    public state = {
        tasks: []
    }
    public render(){
        const taskComponents = this.state.tasks.map((task:ITask)=>{
            return <Task title = {task.title} description={task.des} key={task.idPost} taskId={task.idPost}/>
        })
        return(
            <PageTemplate className='complete-tasks-page'>
                <TasksWrapper>
            {taskComponents}
                </TasksWrapper>
            </PageTemplate>
        );
    }
    public componentDidMount(){
        axios.get('http://95.181.198.18:5000/success').then((resp)=>{
        const response = resp.data;
        this.setState({
            tasks:response
        })
        });
    }
}