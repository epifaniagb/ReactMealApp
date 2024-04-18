import React from 'react';
import { Link } from 'react-router-dom';

const MealsByRegion = ({ selectedRegion }) => {
  return (
    <section>
      <h2>Meals</h2>
      <div className="meals">
        {selectedRegion.map(meal => (
          <div key={meal.idMeal} className="meal">
            <Link to={`/meal/${meal.idMeal}`}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <p>{meal.strMeal}</p>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealsByRegion;

