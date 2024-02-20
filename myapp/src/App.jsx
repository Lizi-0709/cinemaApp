import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Link, Route  } from 'react-router-dom'
import Home from '../src/Pages/Home/Home'
import Profile from '../src/Pages/Profile/Profile'
import Detail from '../src/Pages/Detail/Detail'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
