import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import LocationInfo from './components/LocationInfo/LocationInfo';
import SearchBox from './components//SearchBox/SearchBox';
import ResidentList from './components/ResidentList/ResidentList';

function App() {
 

  const [location, setLocation] = useState({})
  const [id, setId] = useState(0)
  const [buttonSelected, setButtonSelected] = useState(0)

  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/location/ ${id?id:Math.floor(Math.random()*126)+1}`)
         .then(res=>setLocation(res.data))

         setButtonSelected(0)
  },[id])

  const handleLocation = (id)=>{
    setId(id)
  }

  const handleButtonSelected = (num) =>{
    setButtonSelected(num)
  }
  return (
    <div className='app'>

      <SearchBox handleLocation={handleLocation}/>
      <LocationInfo name={location.name} 
                    type={location.type} 
                    dimension={location.dimension} 
                    residents = {location.residents?.length}
      />
      
      
      {
        location.residents?.length>0 && <ResidentList residents={location.residents} 
                                                      buttonSelected={buttonSelected} 
                                                      handleButtonSelected={handleButtonSelected}
                                        />
      }
      
    </div>
  );
}

export default App;
