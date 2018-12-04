import * as React from 'react';

interface INewTaskProps {
    children: React.ReactNode
}

export class NewTask extends React.Component<INewTaskProps>{
    public render(){
        return(
            <div className="new-task">
                {this.props.children}
            </div>
        );
    }
}