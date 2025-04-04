import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 
import { Menu, X } from "lucide-react"; 
import Logo from '../../assets/Searchin_Logo_Green.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="header-container">
        <div className="left-side">
          <NavLink to="/">
            <div className="logo-container">
              <img src={Logo} alt="logo" />
              <h2>SearchIn</h2>
            </div>
          </NavLink>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
          
        </div>

        {/* Navigation Links */}
        <div className={`right-side ${isOpen ? "open" : ""}`}>
          <ul>
            <li className="invisible" onClick={() => setIsOpen(false)}><X size={30} /></li>
            <li><NavLink to="/platform">Platform</NavLink></li>
            <li><NavLink to="/company">Company</NavLink></li>
            <li><NavLink to="/contactus">Contact</NavLink></li>
            <li>
              <NavLink to="/contactus">
                <button>Book Demo</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
