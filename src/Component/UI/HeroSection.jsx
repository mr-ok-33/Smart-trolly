import React from "react";
import TrollyImage from '../../assets/trollywebappimage.png (2).png'
const HeroSection = () =>{
    return (
        <>
            <div className="hero-container">
                <div className="text">
                    <h1>Shop Smarter, Not Harder</h1>
                    <h3>Your Fast Track to Easy Shopping</h3><br/><p>Experience a seamless, stress-free, and intelligent way to shop with Smart Trolley</p>
                    <button>Book Demo</button>
                </div>
                <div className="image">
                    <img src={TrollyImage} alt="SmartTrolly" />
                </div>
            </div>
        </>
    )
}
export default HeroSection;