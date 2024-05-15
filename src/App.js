import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/navbar';
import LandingPage from './Components/Landing_Page/landingPage';
import SignUp from './Components/Sign_up/sign_up';
import Login from './Components/Login/login.js';
import InstantConsultation from './Components/instantConsultation/instantConsultation';
import FindDoctorSearch from './Components/findDoctorSearch/findDoctorSearch.js';
import BookingConsultation from './Components/bookingConsultation';
import Notification from './Components/notification/notification';
import ReviewForm from './Components/reviewForm/reviewForm';
import ProfileForm from './Components/profileCard/profileCard';
import ReportsLayout from './Components/reportsLayout/reportsLayout';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Notification>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/sign_up" element={<SignUp />} />
                        <Route path="/Login" element={<Login />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />
                        <Route path='/finddoctor' element={<FindDoctorSearch />} />
                        <Route path='/search/doctors' element={<BookingConsultation />} />
                        <Route path='/reviews' element={<ReviewForm />} />
                        <Route path='/profile' element={<ProfileForm />} />
                        <Route path='/reports' element={<ReportsLayout />} />                    </Routes>
                </Notification>
            </BrowserRouter>
        </div>
    );
}

export default App;
