import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import * as Quran from '../pages/quran/App';
import * as Doa from '../pages/doa/App';
export default function ReactRouter() {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route exact path='/quran/surah' element={<Quran.Index />}></Route>
            <Route path='/quran/surah/:nomor' element={<Quran.Show />}></Route>
            <Route exact path='/doa' element={<Doa.Index />}></Route>
         </Routes>
      </Router>
   );
}
