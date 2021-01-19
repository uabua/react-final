import React, { useState } from 'react';
import ApodData from '../../apis/apod_data';
import BirthdateForm from './birthdate_form';
import ApodHeader from './apod_header';
import ApodDescription from './apod_description';

const Apod = () => {
    const [clicked, setClicked] = useState(false);
    const [date, setDate] = useState("");

    return <div className="container-fluid col-lg-8" style={{marginTop: "20px"}}>
            <ApodHeader />
            <ApodDescription />
            <hr />

            {clicked ? <ApodData date={date} /> : <BirthdateForm callback={(date) => {setClicked(true); setDate(date) }} />} 
    </div>;
}

export default Apod;