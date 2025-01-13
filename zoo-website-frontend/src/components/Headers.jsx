import React from "react";
import logo from "./assets/pawprint.jpg"

const Header = () => {
return (
    <header className="bg-slate-400/20 text-slate-900 w-screen">
    <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <img src={logo} />;
        <div className="text-lg font-bold">Riglet Zoo</div>

        {/* Navigation */}
        <nav className="space-x-4">
        <a href="#" className="text-slate-900 hover:underline">
            Home
        </a>
        <a href="#" className="text-slate-900 hover:underline">
            About
        </a>
        <a href="#" className="text-slate-900 hover:underline">
            Services
        </a>
        <a href="#" className="text-slate-900 hover:underline">
            Contact
        </a>
        </nav>
    </div>
    </header>
);
};

export default Header;