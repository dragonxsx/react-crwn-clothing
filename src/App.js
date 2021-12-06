import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import { Homepage } from "./pages/homepage/homepage.component";

const HatsPage = (props) => {
  console.log(props)
  
  return <div>
    <h1>Hats pages</h1>
  </div>
}

const HatDetailPage = (props) => {
  console.log(props)
  
  return <div>
    <h1>Hat detail page</h1>
  </div>
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/hats' element={<HatsPage />} />
        <Route path='/hats/:id' element={<HatDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
