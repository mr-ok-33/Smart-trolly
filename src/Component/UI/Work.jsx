import React from "react";
import TrollyImg from '../../assets/trolleyaiimage.webp';
import PaymentImg from '../../assets/makingpayment.jpeg';
import DigitalImg from '../../assets/digitalrecipt.jpg';
import CustomerImg from '../../assets/customerbuyingitem.webp';

const Work = () => {
  return (
    <>
      <div className="work-container">
        <div className="heading-text">
          <h1>How It Works</h1>
          <h3>Follow these simple steps to maximize your shopping experience and make the most out of our services.</h3>
        </div>

        <div className="work-card">
            <div className="card1">
                <img src={TrollyImg} alt="" />
                <pre><h3>1</h3><p> Grab Your Smart Cart</p></pre>
                
            </div>
            <div className="card1">
                <img src={CustomerImg} alt="" />
                <pre><h3>2</h3><p>Scan & Add Products</p></pre>
            </div>
            <div className="card1">
                <img src={PaymentImg} alt="" />
                <pre> <h3>3</h3><p>Instant Payment</p></pre>
               
            </div>
            <div className="card1">
                <img src={DigitalImg} alt="" />
                <pre>  <h3>4</h3><p> Get Your Digital Receipt</p></pre>
              
            </div> 
        </div>
      </div>
    </>
  );
};
export default Work;
