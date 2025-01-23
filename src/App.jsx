import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Layout from './HOC/Layout'
import About from './Pages/About'
import Menu from './Pages/Menu'
import Stories from './Pages/Stories'
import Contact from './Pages/Contact'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
         <Route path='/About' element={<About/>}></Route>
          <Route path='/Menu' element={<Menu/>}></Route>
          <Route path='/Stories' element={<Stories/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
        </Route>

      </Routes>
    </>
  )
}

export default App
