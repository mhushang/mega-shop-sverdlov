import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} />
            <Redirect to="/" />
        </Switch>
    </BrowserRouter>
    ), 
    document.getElementById('root')
);
registerServiceWorker();
