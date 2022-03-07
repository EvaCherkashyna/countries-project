import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { Button } from '../components/Button';
import { searchByCountry } from '../config';
import { Info } from '../components/Info';

export const Details = ({nav}) => {

    const [country, setCountry] = useState(null);
    const { name } = useParams();
    const navigate = useNavigate();
    const goBack = () => navigate(-1,{replace:true});
    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
    }, [name])
    return (
        <div>
            <Button onClick={goBack}>
                <IoArrowBack  /> Back
            </Button>
           {country && <Info navigate = {nav} {...country}></Info>}
        </div>
    )
}