import axios from 'axios';
import * as React from 'react';


import './NewTaskForm.css';

interface IInputProps {
    onChange: (event:React.ChangeEvent<HTMLInputElement>)=>void;
}
interface ITextareaProps {
    onChange: (event:React.ChangeEvent<HTMLTextAreaElement>)=>void;
}

export class NewTaskForm extends React.Component {


    private static TitleInput = ({onChange}:IInputProps)=>(
       <div className='input'>
            <input required={true} autoComplete='off' onChange={onChange} name='title' type="text" placeholder='Input your task title' />
            <label htmlFor="title">Title</label>
        </div>
    );
    private static BodyInput = ({onChange}:ITextareaProps)=>(
        <div className='input textarea'>
            <textarea required={true} onChange={onChange} name = 'body' placeholder='Input your task body' />
            <label htmlFor="body">Body</label>
        </div>
    );
    public state = {
        description: '',
        title: ''
    }

    public CreateHandler = (event:React.MouseEvent) => {
        event.preventDefault()
        const newTask = {
            des: this.state.description,
            title: this.state.title
        }
        axios.post('http://95.181.198.18:5000/add', newTask).then((resp)=>{console.log(resp)});
    }

    public OnChangeTitleHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const newtitle = event.target.value;
        this.setState({
            title: newtitle
        })
    }
    public OnChangeDescriptionHandler=(event:React.ChangeEvent<HTMLTextAreaElement>)=>{
        const newDescription = event.target.value;
        this.setState({
            description: newDescription
        })
    }

    public render(){
        return (
            <form className='new-task-form'>
                    <NewTaskForm.TitleInput onChange ={this.OnChangeTitleHandler}/>
                    <NewTaskForm.BodyInput onChange ={this.OnChangeDescriptionHandler}/>
                    <button  onClick ={(event)=>this.CreateHandler(event)} className='create-button'>Create</button>
            </form>   
        );
    }
}