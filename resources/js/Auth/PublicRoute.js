import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogIn } from '../utils';


const PublicRoute = ({component: Component, resricted, ...rest}) => {
    return(
        <Route {...rest} render= {props => (
            isLogIn() && resricted ?
             <Redirect to='/search' />  
         : <Component {...props}/>
        )} />  
    ) 
}

export default PublicRoute;