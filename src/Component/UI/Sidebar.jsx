import React, { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import Logo from "../../assets/Searchin_Logo_Green.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="sidebar-container">
        <NavLink to="/">
          <div className="sidebar-logo">
            <img src={Logo} alt="logo" />
          </div>
        </NavLink>

        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </div>

        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <NavLink to="/platform" onClick={() => setIsOpen(false)}>
                Platform
              </NavLink>
            </li>
            <li>
              <NavLink to="/company" onClick={() => setIsOpen(false)}>
                Company
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" onClick={() => setIsOpen(false)}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/contactus" onClick={() => setIsOpen(false)}>
                <button>Request Demo</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Sidebar;    