import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import BsNavbar from './components/BsNavbar'
import Home from './components/pages/Home'
import Class1 from './components/pages/Class1'
import Class2 from './components/pages/Class2'
import Class3 from './components/pages/Class3'
import Class4 from './components/pages/Class4'
import Login from './components/pages/Login'
import Profile from './components/pages/Profile'
import Settings from './components/pages/Settings'
import './App.css'

function App() {
  return (
    <>
      
        <BsNavbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/class1' element={<Class1 />} />
          <Route path='/class2' element={<Class2 />} />
          <Route path='/class3' element={<Class3 />} />
          <Route path='/class4' element={<Class4 />} />

          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
