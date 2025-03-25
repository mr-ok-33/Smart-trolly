import React from 'react';
import Logo from '../../assets/Searchin_Logo_Green.png';

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="logo-section">
          <img src={Logo} alt="Logo" />
          <p>
            Our paper is sourced from FSC-certified mills. We plant enough trees
            to more than double our paper usage.
          </p>
        </div>

        <div className="text-section">
          <div className="firstSection">
            <ul>
                <li>Company</li>
                <li>About Us</li>
                <li>Partner</li>
                <li>Program</li>
                <li>Career</li>
                <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="secondSection">
               
                <li>Pricing</li>
                <li>Reviews</li>
                <li>Academy</li>
                <li>Success</li>
                <li>Stories</li>
                <li>Terms & Conditions</li>
          </div>
          <div className="thirdSection">
            <p>Social</p>
            <div className="btn">
            <div className="FB">
                <button>FB</button>
            </div>
            <div className="Linkdln">
            <button>Ln</button>
            </div>
            <div className="instagram">
            <button>In</button>
            </div>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
