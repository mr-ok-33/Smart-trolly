import React from "react";
import { NavLink } from "react-router";

const Reviews = () => {
  return (
    <>
      <div className="review-container">
        <div className="heading-text">
          <h1>Our Reviews</h1>

          <div className="review-card">
            <div class="testimonial-card">
              <div class="stars-date">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <div class="date">10th Feb, 2023</div>
              </div>
              <p class="testimonial-text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt
                Ut Labore. Lorem Ipsum Dolor Sit Amet.
              </p>
              <div class="user-info">
                <img src="profile.png" alt="User Image" />
                <div>
                  <h3>Ray Robertson</h3>
                  <p>CEO Company</p>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="stars-date">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <div class="date">10th Feb, 2023</div>
              </div>
              <p class="testimonial-text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt
                Ut Labore. Lorem Ipsum Dolor Sit Amet.
              </p>
              <div class="user-info">
                <img src="profile.png" alt="User Image" />
                <div>
                  <h3>Ray Robertson</h3>
                  <p>CEO Company</p>
                </div>
              </div>
            </div>

            <div class="testimonial-card">
              <div class="stars-date">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <div class="date">10th Feb, 2023</div>
              </div>
              <p class="testimonial-text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt
                Ut Labore. Lorem Ipsum Dolor Sit Amet.
              </p>
              <div class="user-info">
                <img src="profile.png" alt="User Image" />
                <div>
                  <h3>Ray Robertson</h3>
                  <p>CEO Company</p>
                </div>
              </div>
            </div>


            <div class="testimonial-card">
              <div class="stars-date">
                <div class="stars">⭐⭐⭐⭐⭐</div>
                <div class="date">10th Feb, 2023</div>
              </div>
              <p class="testimonial-text">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
                Eiusmod Tempor Incididunt Ut Labore. Lorem Ipsum Dolor Sit Amet,
                Consectetur Adipisicing Elit, Sed Do Eiusmod Tempor Incididunt
                Ut Labore. Lorem Ipsum Dolor Sit Amet.
              </p>
              <div class="user-info">
                <img src="profile.png" alt="User Image" />
                <div>
                  <h3>Ray Robertson</h3>
                  <p>CEO Company</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact">
            <NavLink to="/contactus">
            <button>Lets Connect</button>
            </NavLink>
                
          </div>

        </div>
      </div>
    </>
  );
};  
export default Reviews;
