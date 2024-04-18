import React, { createContext, useState } from 'react';

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const [mealDetails, setMealDetails] = useState(null);

  return (
    <MealContext.Provider value={{ mealDetails, setMealDetails }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
