import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

const EditDiary = (props) => {
    const diariesId = props.match.params.id
    console.log(props)
    const [state, setState] = useState({});

    useEffect(() => {
        const getEditHandler = async () => {

            try{
                if(diariesId){
                    await axios.get(`api/diary/${diariesId}`)
                                .then(res => {
                                    console.log('data returned !')
                                    console.log(res.data)
                                    setState(res.data);
                                })
                }}
                catch (err) {
                    console.log(err)
                }
            }
            getEditHandler()
    },[])

    console.log(state);

    return(
        <div className="table-responsive">
            <div className="table-wrapper">
                <Navbar />
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                            <div className="py-3" key={state.id}>
                                        {console.log('gross',state.id)}
                                        <div className='card'>
                                            <div className='card-header'>{state.title}</div>

                                            <div className='card-body'>
                                                <ul className='list-group list-group-flush'>
                                                    <li>{state.id}</li>
                                                    <li>{state.description}</li>
                                                    <li>{state.created_at}</li>
                                                    {console.log(state.title)}
                                                </ul>
                                            </div>
                                        </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditDiary;