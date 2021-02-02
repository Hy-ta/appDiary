import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DeleteDiary = (props) => {
    console.log(props)
    // const [value, setValue] = useState('');
    const value = (props.value);

    const deleteHandler = () => {
        try{
            axios.post(`api/diary/delete?id=${value ? value: ''}`)
                    .then(res => {
                        console.log(res, "void_flg is true now.", value);
                    })
            } catch(err) {
                console.log(err, 'occured');
            }
        }

    return(
        <button 
            className='btn btn-danger btn-sm mx-4 mb-3' 
            value={props.value}
            // key={props.value}
            onClick={deleteHandler}
            // onChange={(value) => setValue(value)}
            // type='submit'
        >
            Delete
        </button> 
    )
}

export default DeleteDiary;