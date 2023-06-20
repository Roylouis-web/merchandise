// Header component shared across all routes of the web app

import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <h2 className="brand-name">Merchandise</h2>
        <nav className="navbar">
            <NavLink 
                to="."
                end
                style={({ isActive }) => isActive ? { color: "red" } : null }
            >
                Home   
            </NavLink>

            <NavLink 
                to="products"
                style={({ isActive }) => isActive ? { color: "red" } : null }
            >
                Products
            </NavLink>

            <NavLink 
                to="about"
                style={({ isActive }) => isActive ? { color: "red" } : null }
            >
                About
            </NavLink>

            <NavLink 
                to="contact"
                style={({ isActive }) => isActive ? { color: "red" } : null }
            >
                Contact
            </NavLink>
            <NavLink 
                to="login"
                style={({ isActive }) => isActive ? { color: "red" } : null }
            >
                Login
            </NavLink>
            <NavLink 
                to="account"
                style={({ isActive }) => isActive ? { color: "red" } : null }
            >
                Account
            </NavLink>
        </nav>
    </header>
  );
};