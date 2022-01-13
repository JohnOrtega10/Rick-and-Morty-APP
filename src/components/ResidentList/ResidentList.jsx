import React, { useState } from 'react';
import ResidentInfo from '../ResidentInfo/ResidentInfo';
import './ResidentList.styles.css';

const ResidentList = ({residents, buttonSelected, handleButtonSelected}) => {

    const pageNumbers = []
    for (let i = 0; i < Math.ceil(residents?.length/10); i++) {
        pageNumbers.push(i)
    }

    const [indexFirst, setIndexFirst] = useState(0)  
    const [indexLast, setIndexLast] = useState(10)
    
 
    const handleIndex = (page )=>{
        setIndexFirst(page*10-10)
        setIndexLast(page*10)
    }

    const handleIndexNext = ()=>{
        if(indexFirst+10<residents.length){
            setIndexFirst(indexFirst+10)
            setIndexLast(indexLast+10)
        }

        if(buttonSelected+1<pageNumbers.length){
            handleButtonSelected(buttonSelected+1)
        }
        
    }

    const handleIndexPrevius = ()=>{
        if(indexFirst-10>=0){
            setIndexFirst(indexFirst-10)
            setIndexLast(indexLast-10)
        }  

        if(buttonSelected-1>=0){
            handleButtonSelected(buttonSelected-1)
        }
    }

    const handleSelectedButton = (page)=>{
        if(page === buttonSelected){
            return "button-selected"
        }
    }

    const residentsPage = residents?.slice(indexFirst,indexLast)

    return (
        <>
        <div className='resident-list-conteiner'>
            <h1>Residents</h1>
            <div className='list-residents'>
                {
                    residentsPage?.map(resident=><ResidentInfo key={resident} url={resident}/>)
                }
            </div>
            <div className='buttons-pagination'>
                <button onClick={handleIndexPrevius}><i className="fas fa-arrow-left"></i></button>
                {
                    pageNumbers?.map(page=><button key={page} 
                                                   onClick={()=>{handleIndex(page+1)
                                                                 handleButtonSelected(page)}} 
                                                   className={handleSelectedButton(page)}>{page+1}
                                           </button>)
                }
                <button onClick={handleIndexNext}><i className="fas fa-arrow-right"></i> </button>  
             </div>
            
        </div>
        <footer>
               <div className='footer-background'>
               </div> 
        </footer>
        </>
    );
};

export default ResidentList;