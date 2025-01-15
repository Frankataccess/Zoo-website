import React from "react";
import logo from "../assets/Paw print.svg"
import { Link } from 'react-router-dom';

const Header = () => {
return (
    <header className="bg-slate-400/20 text-slate-900">
    <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/ ">
        <img src={logo} className="h-12 w-12"/>
        </Link>
        <Link to="/ ">
        <div className="text-4xl text-center font-bold text-slate-900 ">Riglet Zoo</div>
        </Link>
        {/* Navigation */}
        <nav className="space-x-4">
        <Link to="/Events">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Events
        </a>
        </Link>
        <Link to="/Tickets">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Tickets
        </a>
        </Link>
        <Link to="/Hotel">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Hotel
        </a>
        </Link>
        <Link to="/Facilities">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Facilities
        </a>
        </Link>
        <Link to="/Account">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Account
        </a>
        </Link>
        <Link to="/Cart">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Cart
        </a>
        </Link>
        <Link to="/Animals">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Animals
        </a>
        </Link>
        </nav>
        
    </div>
    </header>
);
};

export default Header;