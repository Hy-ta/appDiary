import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import axios from 'axios';
import Spinner from '../components/Spinner';
import ListDiaryMap from './ListDiaryMap';

const ListDiary = () => {

    const [state, setState] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const email = localStorage.getItem('email');
     
    useEffect(() => {
        const fetchAll = async () => {
            try{
               await axios.get(`api/diary/index?email=${email ? email: ''}`)
                        .then(res => {
                            if(res) {
                                console.log('data was returned !', res)
                                setState( res.data )
                                setIsLoading(false)
                            };
                        })
                }   
                catch(err){
                    console.log('error occurred', err)
                    setIsLoading(false)

                };
            }
            fetchAll()
    },[])

    return (
        <div className="table-responsive">
            <div className="table-wrapper">
                <Navbar />
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <div className="py-2">
                            <h2>Diary Lists</h2>
                        </div>
                        <ListDiaryMap 
                            state={state}
                            isLoading={isLoading}
                        />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListDiary;