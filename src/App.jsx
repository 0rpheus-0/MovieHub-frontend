import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Actors from './pages/Actors';
import Directors from './pages/Directors';
import Genres from './pages/Genres';
import Home from './pages/Home';
import MovieSolo from './pages/MovieSolo';
import Years from './pages/Years';
import Update from './pages/Update';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie/genre/:id' element={<Genres />} />
      <Route path='/movie/actor/:id' element={<Actors />} />
      <Route path='/movie/director/:id' element={<Directors />} />
      <Route path='/movie/year/:id' element={<Years />} />
      <Route path='/movie/:id' element={<MovieSolo />} />
      <Route path='/update/:id' element={<Update />} />
    </Routes >
  )
}
