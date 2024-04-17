import React, { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';
import MealsByRegion from '../components/MealsByRegion';

const RegionComponent = () => {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');




  useEffect(() => {
    const fetchRegions = async () => {
      const eachRegion = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const fiveRegions = eachRegion[0].meals.slice(0, 5);
      setRegions(fiveRegions);
    };

    fetchRegions();
  }, []);

  const handleRegionChange = async (e) => {
    e.preventDefault();
    const [meals, error] = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${e.target.value}`);
    console.log(meals.meals)
    setSelectedRegion(meals.meals);   
  };  

  return (
    <section>
      <form className="dropdown-menu">
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select Region</option>
          {regions.map(region => (
            <option key={region.strArea} value={region.strArea}>{region.strArea}</option>
          ))}
        </select>
      </form>
      { selectedRegion && <MealsByRegion selectedRegion={selectedRegion} />}
    </section>
  );
};

export default RegionComponent;

  // refactor for form submission
  // fetch data utils
  // handleSubmit