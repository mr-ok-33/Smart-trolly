import React from "react";
import { NavLink } from "react-router";
import Logo from '../../assets/Searchin_Logo_Green.png';
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="left-side">
          <NavLink to="/">
            <div className="logo-container"><img src={Logo} alt="logo" /><h2>SearchIn</h2></div>
          </NavLink>
        </div>
        <div className="right-side">
          <ul>
            <li>
              <NavLink to="/platform">Platform</NavLink>
            </li>
            <li>
              <NavLink to="/company">Company</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/contactus">
                <button>Request Demo</button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Header;
