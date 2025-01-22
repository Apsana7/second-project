import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Header from './Components/Navigation/Header'
import Layout from './HOC/Layout'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
        </Route>

      </Routes>
    </>
  )
}

export default App
