import { Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/Home'
import MealDetailsPage from './pages/MealsDetailPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/meal/:mealId" element={<MealDetailsPage />} />
      </Routes>
    </main>
  )
}

export default App;