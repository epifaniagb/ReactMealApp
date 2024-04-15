const RandomMealsComponent = ({ numMeals }) => {
    const [randomMeals, setRandomMeals] = useState([]);
  
    useEffect(() => {
      const fetchRandomMeals = async () => {
        const meals = [];
        for (let i = 0; i < numMeals; i++) {
          const oneMeal = await fetchData('https://www.themealdb.com/api/json/v1/1/random.php');
          meals.push(oneMeal.meals[0]);
        }
        setRandomMeals(meals);
      };
  
      fetchRandomMeals();
    }, [numMeals]);
  
    return (
      <div id="oneMeal">
        {randomMeals.map(meal => (
          <div key={meal.idMeal} className="eachRender">
            <img src={meal.strMealThumb} alt="Image of Food" className="meal-image" />
            <p>{meal.strMeal}</p>
            <button className="moreInfo" onClick={() => clickForMore(meal.idMeal)}>Click for more info</button>
          </div>
        ))}
      </div>
    );
  };