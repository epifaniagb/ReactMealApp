import React from 'react';

const MealsByRegion = ({ selectedRegion }) => {
  return (
    <section>
      <h2>Meals</h2>
      <div className="meals">
        {selectedRegion.map(meal => (
          <div key={meal.idMeal} className="meal">
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <p>{meal.strMeal}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MealsByRegion;

