import React from 'react';
import Destinations from './pages/Destinations';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favorites from './pages/Favorites';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/destinations' element={<Destinations />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;