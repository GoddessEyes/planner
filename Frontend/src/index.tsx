import * as cors from 'cors';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {TaskPlanner} from './container/TaskPlanner';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <TaskPlanner/>
  </BrowserRouter>,
  document.getElementById('root') as HTMLElement
  
);
registerServiceWorker();
cors();