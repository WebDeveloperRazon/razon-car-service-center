import React from 'react';
import './Service.css'


const Service = ({service}) => {
    const {name , price , description , img} =service 
    return (
        <div className="service">
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h5>{price} BDT</h5>
            <p>{description}</p>
        </div>
    );
};

export default Service;