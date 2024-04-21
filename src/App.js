import react, { useEffect } from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/navbar';
import Login from './Components/Login/login';
import LandingPage from './Components/Landing_Page/landingPage';
import SignUp from './Components/Sign_up/sign_up';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/Login/login" element={<Login/>} />
            <Route path="/Sign_up/sign_up" element={<SignUp/>} />
            
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
