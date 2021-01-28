import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Spinner  from '../components/Spinner';
 
const ListDiaryMap = (props) => {    
    console.log(props)
    console.log(localStorage)
    const [keyWord, setKeyWord] = useState('');


    const deleteHandler = async () => {
        try{
            await axios.post(`api/diary/delete?id=${props.id}`)
                        .then(res=>{
                            setKeyWord(props.id)
                            console.log('delete successfully!', res)
                        })
            } 
            catch (err){

            }
    }

    return (
        props.isLoading ? 
            <Spinner />
         : 
         <>
        {props.state.map(data => {
            return(
                <div className="py-3" key={data.id}>
                    {console.log('gross',data.id)}
                    <div className='card'>
                        <div className='card-header'>Diary Lists</div>

                        <div className='card-body'>
                            <Link className='btn btn-primary btn-sm mb-3' to='/new_diary'>
                                Create a new Diary
                                
                            </Link>
                            <Link className='btn btn-success btn-sm mx-4 mb-3' 
                                  to={`/${data.id}`}
                                  key={data.id}
                                  >
                                Edit
                                
                            </Link>
                            
                                    
                                    <ul className='list-group list-group-flush'>
                                        <li>{data.id}</li>
                                        <li>{data.title}</li>
                                        <li>{data.description}</li>
                                        <li>{data.created_at}</li>
                                        {console.log(data.title)}
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