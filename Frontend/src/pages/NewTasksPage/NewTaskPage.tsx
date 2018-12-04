import * as React from 'react';

import {NewTaskForm} from '../../components/NewTaskForm';
import {NewTask} from '../../container/NewTask';
import {PageTemplate} from '../../pages/PageTemplate';
import './NewTasksPage.css';

export const NewTasksPage = () =>(
        <PageTemplate className = 'new-tasks-page'>
            <NewTask>
                <NewTaskForm/>
            </NewTask>
        </PageTemplate>
);