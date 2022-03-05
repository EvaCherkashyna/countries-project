
import React from 'react';
import {useParams} from 'react-router-dom'
export const Details = () => {
    const {name} = useParams();
    console.log(name);
return (
<div>Details {name}</div>
)
}