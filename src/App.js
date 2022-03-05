import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import {Routes, Route} from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { Details } from './pages/Details';
import { NotFound } from './pages/NotFound';


function App() {
const [countries, setCountries] = useState([])
  return (
    <div>
      <Header />
      <Main>
     <Routes>
       <Route path="/" element={<HomePage countries={countries} setCountries={setCountries}/>}/>
       <Route path="/country/:name" element={<Details/>}/>
       <Route path="*" element={<NotFound/>}/>
     </Routes>
      </Main>
    </div>
  );
}

export default App;
