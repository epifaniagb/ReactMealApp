import React, { useEffect, useState } from 'react';
import fetchData from '../../utils/fetchData';

const RegionComponent = () => {
    const [regions, setRegions] = useState([]);
  
    useEffect(() => {
      const fetchRegions = async () => {
        const eachRegion = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
        const fiveRegions = eachRegion.meals.slice(0, 4);
        setRegions(fiveRegions);
        console.log(eachRegion);
        console.log(regions);
      };
  
      fetchRegions();
    }, []);
  
    return (
      <div className="dropdown-menu">
        {regions.map(region => (
          <li key={region.strArea}>{region.strArea}</li>
        ))}
      </div>
    );
  };

  export default RegionComponent;

  // fetch function utils