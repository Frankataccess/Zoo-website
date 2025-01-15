import React from 'react';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router,Routes,Route,Navigate,} from "react-router-dom";
import './index.css'

import App from './Pages/App.jsx'
import Account from './Pages/Account.jsx'
import Animals from './Pages/Animals.jsx';
import Cart from './Pages/Cart.jsx'
import Events from './Pages/Events.jsx'
import Facilities from './Pages/Facilities.jsx'
import Hotel from './Pages/Hotel.jsx'
import Login from './Pages/login.jsx'
import Register from './Pages/register.jsx'
import Tickets from './Pages/Tickets.jsx'



const Main = () => {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Animals" element={<Animals />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Tickets" element={<Tickets />} />
      </Routes>
    </Router>
    )
  }

  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <Main />
    </React.StrictMode>
  );