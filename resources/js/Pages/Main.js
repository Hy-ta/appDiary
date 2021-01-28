import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import Login from '../Auth/Login';
import SignUp from '../Auth/SignUp';

const Main = () => {

    const data = localStorage.getItem('isLoggedIn');
    console.log(localStorage)

    return (
        <div className="py-4">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                    
                            { !data ?
                                <Redirect to="/login" /> 
                                : 
                                <Redirect to="search" /> 
                            }
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;


