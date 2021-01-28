import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogIn } from '../utils';


const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render= {props => (
            isLogIn() ?
                <Component {...props}/>
         : <Redirect to='/sign_up' /> 
        )} />  
    ) 
}

export default PrivateRoute;