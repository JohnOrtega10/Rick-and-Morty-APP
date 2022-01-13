import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './ResidentInfo.styles.css';

const ResidentInfo = ({url}) => {

    const [resident, setResident] = useState({})

    useEffect (()=>{
        axios.get(url)
             .then(res=>setResident(res.data))
    },[url]) 

    const handleStatus = ()=>{ 
        if(resident.status==="Alive"){
            return "alive"
        }else if (resident.status==="Dead"){
            return "dead"
        }else{
            return "unknow"
        }
    }

    return (
        <div className='residen-conteiner'>
             <div className='name-conteiner'>
                 <h3>{resident.name}</h3>
             </div>
                <img src={resident.image} alt="resident" />
                <div className='info'>
                    <p className='more' ><i className="fas fa-plus"></i>  More Info</p>
                    <p><span className={handleStatus()}></span>  {resident.species} - {resident.status}</p>
                    <p>Origin {resident.origin?.name}</p>
                    <p>Episode where appares {resident.episode?.length}</p>
                </div>        
        </div>
    );
};

export default ResidentInfo;