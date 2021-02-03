import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner  from '../components/Spinner';
import { Button } from 'reactstrap';
import DeleteDiary from './DeleteDiary';
 
const ListDiaryMap = (props) => {    
    // console.log(props)
    // console.log(localStorage)

    return (
        props.isLoading ? 
            <Spinner />
         : 
         <>
        {props.state.map(data => {
            return(
                <div className="py-3" key={data.id}>
                    {console.log('data.id:',data.id)}
                    <div className='card'>
                        <div className='card-header'>Diary Lists</div>

                        <div className='card-body'>
                            <Link className='btn btn-primary btn-sm mb-3' to='/new_diary'>
                                Create a new Diary
                                
                            </Link>
                            <Link className='btn btn-success btn-sm mx-4 mb-3' 
                                  to={`/${data.id}`}
                                  >
                                Edit
                                
                            </Link>

                            <DeleteDiary 
                                value={data.id}
                            />
                                    
                                    <ul className='list-group list-group-flush'>
                                        <li className="py-2 mx-4">{data.title}</li>
                                        <li className="py-2 mx-4">{data.description}</li>
                                        <li className="py-2 mx-4">{data.startDate}</li>
                                        <li className="py-2 mx-4">{data.endDate}</li>
                                        <li className="py-2 mx-4">{data.created_at}</li>
                                    </ul>
                        </div>
                    </div>
                </div>
            )
        })} 
        </> 
    )
}

export default ListDiaryMap;