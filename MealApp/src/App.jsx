import { Route, Routes } from 'react-router-dom';
import './App.css'

import Home from './pages/Home'

function App() {

  return (
    <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/meal/:mealId" render={({ match }) => <MealDetailsPage mealId={match.params.mealId} />} />
          console.log(MealDetailsPage)
        </Routes>
      </main>
  )
}

export default App;
