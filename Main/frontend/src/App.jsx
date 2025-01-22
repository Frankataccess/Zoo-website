import { useState } from 'react'
import './App.css'
import Home from './components/pages/Home'
import Register from './components/pages/Register'
import Login from './components/pages/Login'
import About from './components/pages/About'
import Navbar from './components/Navbar'
import NavbarNew from './components/NavbarNew'
import Profile from './components/pages/Profile'
import Bookings from './components/pages/Bookings'
import Animals from './components/pages/Animals'
import Cart from './components/pages/Cart'
import Events from './components/pages/Events'
import Facilities from './components/pages/Facilities'
import Hotel from './components/pages/Hotel'
import Tickets from './components/pages/Tickets'
import {Routes, Route, useLocation} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoutes'
import PasswordResetRequest from './components/PasswordResetRequest'
import PasswordReset from './components/PasswordReset'
import Rewards from './components/pages/Rewards'

function App() {
  const location = useLocation()
  const noNavbar = location.pathname === "/register" || location.pathname === "/" || location.pathname.includes("password")

  return (
    <>
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/request/password_reset" element={<PasswordResetRequest/>}/>
            <Route path="/password-reset/:token" element={<PasswordReset/>}/>
            <Route element={<ProtectedRoute/>}> 
                <Route path="/home" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/bookings" element={<Bookings/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="/animals" element={<Animals/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/events" element={<Events/>}/>
                <Route path="/facilities" element={<Facilities/>}/>
                <Route path="/hotel" element={<Hotel/>}/>
                <Route path="/tickets" element={<Tickets/>}/>
                <Route path="/rewards" element={<Rewards/>}/>
            </Route>
        </Routes>
    </>
  )
}

export default App
