import React from 'react';
import './LocationInfo.styles.css'


const LocationInfo = ({name,type,dimension,residents}) => {
   

    return (
        <div className='location-info-container'>
            <div className='image'>
                <h1>{name}</h1>
                <div className='info'>
                        <p><b>Type:</b> {type}</p>
                        <p><b>Dimension:</b> {dimension}</p>   
                        <p><b>Residents:</b> {residents}</p>  
                </div>
            </div>
        </div>
    );
};

export default LocationInfo;