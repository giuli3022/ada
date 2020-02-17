import React from 'react';
import {useParams} from 'react-router-dom';

const Nuevo = () => {
    const {title} = useParams();

    return (
        <h1>{title}</h1>
    );
};

export default Nuevo;

