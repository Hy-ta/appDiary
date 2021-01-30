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
            startDate: '',
            endDate: '',
            stDate:'',
            edDate:'',
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
            description: this.state.description,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }

        axios.post(`api/diary/create`, data)
                .then(res => {
                    console.log('request successed!', res)
                    this.props.history.push('/search')
                }).catch(err => {
                    console.log('error request failed..', err)
                    this.setState({
                        errors: err.response.data.errors
                    })
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

    // dateValidateHandler(){
    //     var stDate = this.state.startDate;
    //     var edDate = this.state.endDate;
    //     var regExp = /(\d{1,2})\/(\d{1,2})\/(\d{2,4})/;
    //     if(parseInt(edDate.replace(regExp, "$3$2$1")) > parseInt(stDate.replace(regExp, "$3$2$1"))){
    //         alert("greater!")
    //     }       
    // }


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
                                            <label>Title: </label>
                                            {/* error message */}
                                            
                                            { this.state.errors &&
                                                <h3 className="error"> { this.state.errors.message } </h3> 
                                            }

                                            

                                            {/* //////////// */}
                                            <input
                                                id='title'
                                                type='text'
                                                className={`form-control ${this.hasErrorFor('title') ? 'is-invalid' : ''}`}
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

                                        {/* startDate */}
                                        <div className='form-group1'>
                                            <label htmlFor='startDate'>Start Date</label>
                                            <input
                                                id='startDate'
                                                type='date'
                                                className={`form-control ${this.hasErrorFor('startDate') ? 'is-invalid' : ''}`}
                                                name='startDate'
                                                value={this.state.startDate}
                                                onChange={this.onChangeHandler}
                                            />
                                            {this.renderErrorFor('startDate')}
                                        </div>

                                        {/* endDate */}
                                        <div className='form-group2'>
                                            <label htmlFor='endDate'>End Date</label>
                                            <input
                                                id='endDate'
                                                type='date'
                                                className={`form-control ${this.hasErrorFor('endDate') ? 'is-invalid' : ''}`}
                                                name='endDate'
                                                value={this.state.endDate}
                                                onChange={this.onChangeHandler}
                                            />
                                            {this.renderErrorFor('endDate')}
                                        </div>
                                        <div className="py-3 text-right">
                                            <button 
                                                className='btn btn-primary py-2'
                                                type='submit'
                                            >
                                                Create</button>
                                        </div>
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