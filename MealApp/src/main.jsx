import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; 
import { MealProvider } from './utils/mealContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MealProvider>
      <App />
    </MealProvider>
  </BrowserRouter>
);
