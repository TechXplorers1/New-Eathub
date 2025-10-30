import React from 'react';
import './banner.css';
import Salad from "../assets/tomato-spenach.webp";
import Burger from "../assets/Plate-Burger.webp";
import IceCream from "../assets/icecream.webp";

const Banner = () => {
  const saladImage = Salad; 
  const burgerImage = Burger;
  const creamyDishImage = IceCream;

  return (
    <div className="container-fluid py-4">
      <div className="row g-4">
        
        {/* === Left Card: 50% Off First Order === */}
        <div className="col-12 col-lg-6">
          {/* Removed p-4 p-md-5 from the card class, using CSS padding instead for consistency */}
          <div className="promo-card promo-orange d-flex flex-column flex-md-row justify-content-between align-items-center">
            
            {/* Removed the 'mb-4 mb-md-0' margin from text content */}
            <div className="promo-text-content me-md-4 text-center text-md-start">
              <h2 className="promo-title">
                Enjoy 50% off your first order!
              </h2>
              {/* Adjusted margin to match the original image spacing */}
              <p className="promo-subtitle mt-3 mb-4">
                Use code 50TREAT on delivery orders of $15+
              </p>
              <button className="btn promo-btn-light">
                Learn more
              </button>
            </div>

            <div className="promo-images-container d-flex flex-shrink-0">
              <img 
                src={saladImage} 
                alt="Salad in a bowl" 
                className="img-fluid promo-image-small me-2"
              />
              <img 
                src={burgerImage} 
                alt="Burger and fries" 
                className="img-fluid promo-image-small"
              />
            </div>
          </div>
        </div>

        {/* === Right Card: Unlimited $0 Delivery Fees === */}
        <div className="col-12 col-lg-6">
          {/* Removed p-4 p-md-5 from the card class, using CSS padding instead for consistency */}
          <div className="promo-card promo-teal d-flex justify-content-between align-items-center">
            
            {/* Added custom class to constrain text width */}
            <div className="promo-text-content promo-teal-text text-center text-md-start">
              <h2 className="promo-title">
                Get unlimited $0 delivery fees on <br /> eligible Eat Hub orders*
              </h2>
              <p className="promo-subtitle mt-3 mb-4">
                Plus exclusive offers and savings
              </p>
              <button className="btn promo-btn-teal">
                Try it Free for 30 Days
              </button>
            </div>

            {/* THIS IS THE IMAGE CONTAINER FOR THE RIGHT CARD */}
            {/* Added 'd-block' on md-up to display the image */}
            <div className="promo-images-container flex-shrink-0 d-none d-md-block promo-image-right-container">
              <img 
                src={creamyDishImage} 
                alt="Creamy dish on a plate" 
                className="img-fluid promo-image-large"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Banner;