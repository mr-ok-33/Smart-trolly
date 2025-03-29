import React from "react";
import { NavLink } from "react-router-dom";
import profileImg from '../../assets/ico-tag.svg';

const Reviews = () => {
  return (
    <>
      <div className="review-container">
        <div className="heading-text">
          <h1>Our Reviews</h1>

          <div className="review-card">
            <div className="testimonial-card">
              <div className="stars-date">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="date">10th Feb, 2023</div>
              </div>
              <p className="testimonial-text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
              </p>
              <div className="user-info">
                <img src={profileImg} alt="User Image" />
                <div>
                  <h3>Ray Robertson</h3>
                  <p>CEO Company</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars-date">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="date">10th Feb, 2023</div>
              </div>
              <p className="testimonial-text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
              </p>
              <div className="user-info">
                <img src={profileImg} alt="User Image" />
                <div>
                  <h3>Ray Robertson</h3>
                  <p>CEO Company</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars-date">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="date">10th Feb, 2023</div>
              </div>
              <p className="testimonial-text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
              </p>
              <div className="user-info">
                <img src={profileImg} alt="User Image" />
                <div>
                  <h3>Ray Robertson</h3>
                  <p>CEO Company</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars-date">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <div className="date">10th Feb, 2023</div>
              </div>
              <p className="testimonial-text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore.
              </p>
              <div className="user-info">
                <img src={profileImg} alt="User Image" />
                <div>
                  <h3>Ray Robertson</h3>
                  <p>CEO Company</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact">
            <NavLink to="/contactus">
              <button>Let's Connect</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviews;
