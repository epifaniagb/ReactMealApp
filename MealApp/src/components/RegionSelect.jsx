import React, { useEffect, useState } from 'react';
import fetchData from '../utils/fetchData';

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

  const handleRegionChange = (e) => {
    e.preventDefault();
    setSelectedRegion(e.target.value);
    {selectedRegion && (
      <p>You selected: {selectedRegion}</p>
    )}
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
    </form>
    </section>
  );
};

export default RegionComponent;

  // refactor for form submission
  // fetch data utils
  // handleSubmit
