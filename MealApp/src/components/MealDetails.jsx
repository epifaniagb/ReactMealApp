import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router
import fetchData from '../utils/fetchData';
import MealContext from '../utils/mealContext';

const MealDetails = () => {
  const { mealId } = useParams(); // Extract mealId from URL
  const { mealDetails, setMealDetails } = useContext(MealContext);
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        const [moreInfo] = await fetchData(url);
        setMealDetails(moreInfo.meals[0]);
      } catch (error) {
        console.error('Error fetching meal details:', error);
      }
    };

    fetchMealDetails();
  }, [mealId, setMealDetails, url]); // Include url in the dependencies array

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

export default MealDetails;