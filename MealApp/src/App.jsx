import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegionComponent from './assets/components/RegionSelect'

function App() {
  const [count, setCount] = useState(0)

  return (
    <RegionComponent/> 
  )
}

export default App
