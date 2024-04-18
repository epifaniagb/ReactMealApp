import { useState, useEffect } from 'react';
import fetchData from '../utils/fetchData';

const MealDetailsPage = ({ mealId }) => {
  const [mealDetails, setMealDetails] = useState(null);

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const moreInfo = await fetchData(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
        setMealDetails(moreInfo.meals[0]);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchMealDetails();
  }, [mealId]);

  return (
    <div>
      <h2>Meal Details</h2>
      {mealDetails && (
        <div className="meal-details">
          <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
          <p>{mealDetails.strMeal}</p>
          <p>{mealDetails.strInstructions}</p>
          <p>Ingredients:</p>
          <ul>
            {Object.keys(mealDetails)
              .filter(key => key.startsWith('strIngredient') && mealDetails[key])
              .map(key => (
                <li key={key}>{mealDetails[key]}</li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MealDetailsPage;