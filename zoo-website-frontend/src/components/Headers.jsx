import React from "react";
import logo from "C:/Users/frank.mccann.355_acc/Documents/Code/Zoo-website/zoo-website-frontend/src/assets/paw print.svg"
import { Link } from 'react-router-dom';

const Header = () => {
return (
    <header className="bg-slate-400/20 text-slate-900">
    <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img src={logo} className="h-12 w-12"/>
        <div className="text-4xl text-center font-bold ">Riglet Zoo</div>

        {/* Navigation */}
        <nav className="space-x-4">
        <Link to="Events">
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Events
        </a>
        </Link>
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Tickets
        </a>
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Hotel
        </a>
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Facilities
        </a>
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Account
        </a>
        <a href="#" className="text-slate-900 text-xl hover:underline">
            Cart
        </a>
        </nav>
        
    </div>
    </header>
);
};

export default Header;