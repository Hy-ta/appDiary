import axios from 'axios';
import React, { Children, useEffect, useState } from 'react';

const EditInfo = (props) => {
    
    const [state, setState] = useState(props.state);
    const edit = (props.edit)
    console.log(props)

    const inputChangeHandler = (e) => {
        const { name, value } = e.target

        setState({ 
                ...state, 
                [name]: value 
            })

        console.log(state)
    }

    const updateHandler = () => {
        try{
            axios.post(`api/diary/update`, state)
            // axios.post(`api/diary/update?title=${state.title ? state.title: ''}&description=${state.description ? state.description: ''}&startDate=${state.startDate ? state.startDate: ''}&endDate=${state.endDate ? state.endDate: ''}`)

                    .then(res => {
                        console.log('update successfully!!', res);
                    })
            }
        catch(err) {
            console.log(err, 'occured');
        }
    }


    return(
       
        <div className='card'>
            <div className='card-header'>Edit</div>

            <div className='card-body'>
                <form className='list-group list-group-flush' onSubmit={updateHandler}>

                        {/* title */}

                        <div className="col-md-6 py-2">
                        <label className="col-md-4 col-form-label text-md-right text-danger">Title:</label>

                            <input
                                type="text"
                                name="title"
                                placeholder={state.title}
                                value={state.title}
                                onChange={inputChangeHandler}
                            />
                                                        
                            <span className="text-danger"></span>
                        </div>

                        {/* description */}

                        
                        <div className="col-md-6 py-2">
                        <label className="col-md-4 col-form-label text-md-right text-danger">Description:</label>
                            <input
                                type="text"
                                name="description"
                                placeholder={state.description}
                                value={state.description}
                                onChange={inputChangeHandler}
                            />
                                                    
                        <span className="text-danger"></span>
                        </div>

                        {/* startDate */}

                        
                        <div className="col-md-6 py-2">
                        <label className="col-md-4 col-form-label text-md-right text-danger">Start Date:</label>
                            <input
                                type="date"
                                name="startDate"
                                placeholder={state.startDate}
                                value={state.startDate}
                                onChange={inputChangeHandler}
                            />
                                                    
                        <span className="text-danger"></span>
                        </div>

                        {/* endDate */}

                        
                        <div className="col-md-6 py-2">
                        <label className="col-md-4 col-form-label text-md-right text-danger">End Date:</label>
                            <input
                                type="date"
                                name="endDate"
                                placeholder={state.endDate}
                                value={state.endDate}
                                onChange={inputChangeHandler}
                            />
                                                    
                        <span className="text-danger"></span>
                        </div>
                        <div className="py-2">
                            <button 
                                className="btn btn-primary"
                                onClick={updateHandler}          
                                >
                                SAVE
                            </button>
                        </div>
                    </form>
                </div>
            </div>

    )
}

export default EditInfo;