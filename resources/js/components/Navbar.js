import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = (props) => {

    function logoutHandler (){
        localStorage.clear();
        console.log(localStorage)
    }
    
    return(
        <div className="table-title">
                    <div className="row">
                        <div className="col-sm-3">
                            <h2><b>Diary</b></h2>
                            <h2><b>{props.name}</b></h2>
                        </div>
                        <div className="col-sm-9">
                            <Link to="/" className="btn btn-secondary" onClick={logoutHandler}> <span className="text-danger">Logout</span></Link>
                            <Link to="/new_diary" className="btn btn-secondary"> <span className="text-dark">New</span></Link>
                            <Link to="/list_diary" className="btn btn-secondary"> <span className="text-dark">Lists</span></Link>
                            <a href="#" className="btn btn-secondary"> <span className="text-dark">On process</span></a>
                            <Link to="/search" className="btn btn-secondary"> <span className="text-dark">Search</span></Link>
                        </div>
                    </div>
                </div>
    );
}

export default Navbar;