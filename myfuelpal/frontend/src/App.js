import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SignIn from './views/SignIn';
import SignUp from './views/SignUp';
import Welcome from './views/Welcome';
import Dashboard from './views/Dashboard';
import Mycars from './views/MyCars';
import Myfuelpal from './views/Myfuelpal';
import Profile from './views/Profile';
import Settings from './views/Settings';

import AddCar from './views/AddCar';
import AddFuelnote from './views/AddFuelnote';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Welcome />} />
                <Route path="/loginek" element={<SignIn />} />
                <Route path="/registerek" element={<SignUp />} />
                <Route path="/home" element={<Dashboard />} />
                <Route path="/mycars" element={<Mycars />} />
                <Route path="/myfuelpal" element={<Myfuelpal />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/settings" element={<Settings />} />

                <Route path="/addcar" element={<AddCar />} />
                <Route path="/addfuelnote" element={<AddFuelnote />} />
            </Routes>
        </Router>
    );
}

export default App;