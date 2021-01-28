import React, { useEffect, useState } from 'react';
import Table from './Table';
import Navbar from '../components/Navbar';
import InputForm from '../components/InputForm';
import PageNation from '../components/PagiNaton';
import '../components/styles.css';
import axios from 'axios';


const Search = () => {
    const [searchValue, setSearchValue] = useState('');
    const [searchArray, setSearchArray] = useState([]);
    const [errMessage, setErrMessage] = useState('');

    const [check, setChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const storage = localStorage.getItem('userData');

    // console.log(localStorage)
    // console.log("sssssss",userData)

    const isLoggedIn = window.localStorage.getItem('isLoggedIn') == true && check === false;
    
    const userInfo = () => {
            if(isLoggedIn){
                setUserData(storage)
                console.log(userData)
                setChecked(true);
            } 
    };

    const getSearchHandler = async (searchValue) => {
        try{
            axios.get(`api/diary/search?title=${searchValue ? searchValue : ''}`)
                    .then(res => {
                        if(res){
                            setSearchArray(res.data);
                            setIsLoading(false);
                        }
                    });
                } catch(err) {
                        console.log('error occurred', err);
                        setErrMessage(response.err);
                }
    }

    useEffect(() => {
            userInfo(),
            DataArray()
    },[])

    useEffect(() => {
        getSearchHandler(searchValue)
    }, [searchValue]);

    const DataArray = () => {
        sessionStorage.user = JSON.stringify({ name: "name" });
        // console.log(sessionStorage)
        // sometime later
        let user = JSON.parse( sessionStorage.user );
        // alert( user.name ); // John
    }


    return(
        <div className="table-responsive">
            <div className="table-wrapper">
                    
                    <Navbar 
                        storage={storage}
                    />
                    <InputForm 
                        value={searchValue}
                        setSearchValue={setSearchValue}
                        err={errMessage}
                    />
                    <Table 
                        state={searchArray}
                    />
                    <PageNation />    
                 
            </div> 
        </div>  
    )
}
export default Search;