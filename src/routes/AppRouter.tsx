import React from 'react'
import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import { Home } from '../pages/Home';
import { Favorites } from '../pages/Favorites';



export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>} />   
            <Route path="/favorites" element={<Favorites />} />   
        </Routes>
    </BrowserRouter>
  )
}
