import React, { useState, useEffect } from 'react';
import fetchData from '../utils/fetchData';

const MealsByRegion = ({ region }) => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const data = await fetchData(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${region}`);
      setMeals(data.meals || []);
    };

    fetchMeals();
  }, [region]);

  return (
    <div>
      <h2>{region} Meals</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal}>{meal.strMeal}</li>
        ))}
      </ul>
    </div>
  );
};

const RegionComponent = () => {
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('');
  const [showMeals, setShowMeals] = useState(false);

  useEffect(() => {
    const fetchRegions = async () => {
      const eachRegion = await fetchData('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
      const fiveRegions = eachRegion[0].meals.slice(0, 5);
      setRegions(fiveRegions);
    };

    fetchRegions();
  }, []);

  const handleRegionChange = (e) => {
    e.preventDefault();
    const region = e.target.value;
    setSelectedRegion(region);
    setShowMeals(true);
  };

  return (
    <section>
      <form onSubmit={handleRegionChange} className="dropdown-menu">
        <select value={selectedRegion} onChange={handleRegionChange}>
          <option value="">Select Region</option>
          {regions.map(region => (
            <option key={region.strArea} value={region.strArea}>{region.strArea}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
      {showMeals && selectedRegion && <MealsByRegion region={selectedRegion} />}
    </section>
  );
};

export default RegionComponent;