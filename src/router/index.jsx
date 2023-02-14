import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import * as Quran from '../pages/quran/App';
export default function ReactRouter() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/quran/surah' element={<Quran.Index />}></Route>
            <Route path='/quran/surah/:nomor' element={<Quran.Show />}></Route>
         </Routes>
      </Router>
   );
}
