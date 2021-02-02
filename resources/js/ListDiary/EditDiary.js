import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import EditInfo from './EditInfo';

const EditDiary = (props) => {
    const diariesId = props.match.params.id
    const [state, setState] = useState({});
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        const getEditHandler = async () => {

            try{
                if(diariesId){
                    await axios.get(`api/diary/${diariesId}`)
                                .then(res => {
                                    // console.log('data returned !')
                                    // console.log(res.data)
                                    setState(res.data);
                                })
                }}
                catch (err) {
                    console.log(err)
                }
            }
            getEditHandler()
    },[])

    const editHandler = () => {
        setEdit(true);
    }


    return(
        <div className="table-responsive">
            <div className="table-wrapper">
                <Navbar />
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                            <div className="py-3" key={state.id}>
                                {!edit ? 
                                    
                                        <div className='card'>
                                            <div className='card-header'>{state.title}</div>

                                            <div className='card-body'>
                                                <ul className='list-group list-group-flush'>
                                                    <li>{state.id}</li>
                                                    <li>{state.description}</li>
                                                    <li>{state.created_at}</li>
                                                </ul>
                                            </div>
                                        </div> 
                                        : 
                                        <EditInfo 
                                            state={state}
                                            setEditting={edit}
                                        />
                                }
                                <div className="py-2">
                                    <button 
                                        className="btn btn-success"
                                        onClick={editHandler}          
                                        >
                                        Edit
                                    </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditDiary;