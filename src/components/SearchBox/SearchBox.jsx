import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './SearchBox.styles.css';
import morty from '../../images/morty.gif'


const SearchBox = ({handleLocation}) => {

    const [namesData, setNamesData] = useState ({})
    const [nameFilter, setNameFilter] = useState("")
    const [nameValue, setNameValue] = useState("")
    
    const nameNotFound = {
        results: [
                    {
                        name: "Not found",
                        id: 1
                    }
                 ]
    }

    const nameNotFoundFuntion = ()=>{
        setNamesData(nameNotFound)
    }
     
    useEffect(()=>{
        axios.get(`https://rickandmortyapi.com/api/location/?name=${nameFilter}`)
              .then(res=>setNamesData(res.data))
              .catch(()=>nameNotFoundFuntion())
              // eslint-disable-line react-hooks/exhaustive-deps
    },[nameFilter])


    
    
    const isNotFound = (name,id)=>{
        if (name!=="Not found"){
            handleLocation(id)
            setNameValue(name)
            setNameFilter("")
        }
    }


   
    return (
        <div className='header'>
            <nav>
                <img src={morty} alt="" />
                <span>Rick and Morty APP</span>
            </nav>
            
            <div className='search-conteiner'>
                <input type="text"  
                       onChange={e=>{setNameFilter(e.target.value)
                                    setNameValue(e.target.value)}} 
                       value={nameValue} 
                       placeholder="Find a location" 
                       className={nameFilter?'searchBoxWrite':'searchBox'}
                />
                <div className='icon-search'>
                    <i className="fas fa-search"></i>
                </div>
               
                {
                    nameFilter&&(
                        <>
                            {
                                namesData.results?.map(name => (
                                                                    <div  key={name.id} onClick={()=>isNotFound(name.name,name.id)} className='locations-conteiner'>  
                                                                        {name.name}
                                                                    </div>
                                                       ) )                         
                            }
                        </>
                    )
                }
            </div>
        </div>
    );
};

export default SearchBox;