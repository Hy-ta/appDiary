import React, { useEffect, useState } from 'react';
import Table from './Table';
import Navbar from '../components/Navbar';
import InputForm from '../components/InputForm';
import PageNation from '../components/PagiNaton';
import '../components/styles.css';
import axios from 'axios';


const Search = () => {
    // console.log(localStorage)

    const [searchValue, setSearchValue] = useState('');
    const [searchStDateValue, setSearchStDateValue] = useState('');
    const [searchEdDateValue, setSearchEdDateValue] = useState('');

    const [searchArray, setSearchArray] = useState([]);
    const [errMessage, setErrMessage] = useState('');
    const email = localStorage.getItem('email');

    const [check, setChecked] = useState(false);
    const [isLoading, setIsLoading] = useState(true)
    const storage = localStorage.getItem('userData');

    const isLoggedIn = window.localStorage.getItem('isLoggedIn') == true && check === false;
    
    const userInfo = () => {
            if(isLoggedIn){
                setUserData(storage)
                setChecked(true);
            } 
    };

    const getSearchHandler = async (searchValue, searchStDateValue, searchEdDateValue, email) => {
        try{
            axios.get(`api/diary/search?title=${searchValue ? searchValue : ''}&startDate=${searchStDateValue ? searchStDateValue: ''}&endDate=${searchEdDateValue ? searchEdDateValue: ''}&email=${email ? email: ''}`)
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
            userInfo()
    },[])

    useEffect(() => {
        getSearchHandler(searchValue, searchStDateValue, searchEdDateValue, email)
    }, [searchValue, searchStDateValue, searchEdDateValue, email]);


    return(
        <div className="table-responsive">
            <div className="table-wrapper">
                    
                    <Navbar 
                        storage={storage}
                    />
                    <InputForm 
                        value={searchValue}
                        valueSt={searchStDateValue}
                        valueEd={searchEdDateValue}
                        setSearchValue={setSearchValue}
                        setSearchStDateValue={setSearchStDateValue}
                        setSearchEdDateValue={setSearchEdDateValue}
                        err={errMessage}
                    />
                    <Table 
                        state={searchArray}
                    />
                    {/* <PageNation />     */}
                 
            </div> 
        </div>  
    )
}
export default Search;