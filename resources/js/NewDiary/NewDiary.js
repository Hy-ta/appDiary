import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { Component } from 'react';
import Navbar  from '../components/Navbar';
import '../components/styles.css'

class NewDiary extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            description: '',
            errors: [],
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.hasErrorFor = this.hasErrorFor.bind(this);
        this.renderErrorFor = this.renderErrorFor.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
       this.setState({ 
            [e.target.name]: e.target.value
        });
    }

    onSubmitHandler(e){
        e.preventDefault();

        const data = {
            title: this.state.title,
            description: this.state.description
        }

        axios.post(`api/diary/create`, data)
                .then(res => {
                    console.log('request successed!', res)
                    this.props.history.push('/search')
                }).catch(err => {
                    console.log('error request failed..', err)
                })
    }

    hasErrorFor(field){
        return !!this.state.errors[field];
    }
    
    renderErrorFor(field){
        if(this.hasErrorFor(field)){
            return(
                <span className='invalid-feedback'>
                    <strong>{this.state.errors[field][0]}</strong>
                </span>
            )
        }
    }

    render(){
        console.log(this.state)
        return(
        <div className="table-responsive">
            <div className="table-wrapper">
                <Navbar />  
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <div className='card'>
                                <div className='card-header'>Create New Project</div>
                                <div className='card-body'>

                                    <form onSubmit={this.onSubmitHandler}>
                                        <div className='form-group'>
                                            <label htmlFor='name'>Title: </label>
                                            {/* error message */}
                                            
                                            { this.state.errors &&
                                                <h3 className="error"> { this.state.errors.message } </h3> 
                                            }

                                            

                                            {/* //////////// */}
                                            <input
                                                id='name'
                                                type='text'
                                                className={`form-control ${this.hasErrorFor('name') ? 'is-invalid' : ''}`}
                                                name='title'
                                                value={this.state.title}
                                                onChange={this.onChangeHandler}
                                            />
                                            {this.renderErrorFor('title')}    
                                        </div>
                                        <div className='form-group'>
                                            <label htmlFor='description'>Project description</label>
                                            <textarea
                                                id='description'
                                                className={`form-control ${this.hasErrorFor('description') ? 'is-invalid' : ''}`}
                                                name='description'
                                                rows='10'
                                                value={this.state.description}
                                                onChange={this.onChangeHandler}
                                            />
                                            {this.renderErrorFor('description')}
                                        </div>
                                        <button 
                                            className='btn btn-primary'
                                            type='submit'
                                        >
                                            Create</button>
                                    </form>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default NewDiary;