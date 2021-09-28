import React, { useEffect, useState } from 'react';
import Informations from '../Inforamations/Informations';
import'./Home.css';

const Home = () => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    
    return (           
         <div className="home-container">
              <h3 className = "total-country">Total Countries: { countries.length}</h3>
            <div className = "country-container">
              
               {
                   countries.map(country => <Informations
                    country={country}
                   ></Informations>)
               }
           </div> 
        </div> 


              
   
    );
};

export default Home;