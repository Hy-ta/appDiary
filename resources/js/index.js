import React from 'react';
import ReactDOM from 'react-dom';
import {
        BrowserRouter as Router,
        Switch,
        Route
        } from 'react-router-dom';
import PrivateRoute from './Auth/PrivateRoute';
import PublicRoute from './Auth/PublicRoute';

import Login from '../js/Auth/Login';
import SignUp from '../js/Auth/SignUp';
import Main from '../js/Pages/Main';
import Search from '../js/Search/Search';
import NewDiary from './NewDiary/NewDiary';
import ListDiary from './ListDiary/ListDiary';
import EditDiary from './ListDiary/EditDiary';

function Index() {
    const Top = () => {
        return(
            <div>
                <h1>test</h1>
                <Main />
            </div>
        )
    }
    return (
        <Router>
            <Switch>
                <PublicRoute exact path="/" component={Login} /> 
                <PublicRoute resricted={false} path="/login" component={Login} />
                <PublicRoute resricted={true} path="/sign_up" component={SignUp} />
                <PrivateRoute path="/search" component={Search} />
                <PrivateRoute path="/new_diary" component={NewDiary} />
                <PrivateRoute path="/list_diary" component={ListDiary} />
                <PrivateRoute path="/:id" component={EditDiary} />
            </Switch>
        </Router>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
