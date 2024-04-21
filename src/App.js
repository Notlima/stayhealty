import react, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/navbar';
import Layout from './Components/Landing_Page/landingPage';
import LandingPage from './Components/Landing_Page/landingPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
