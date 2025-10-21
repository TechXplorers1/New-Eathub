// DishCard.jsx
import React from 'react';
import './Dishoftheday.css';
// Assuming you have a default image file in your assets folder
import burgerImage from "../assets/burger.png"; 

const DishCard = ({ type, discountPrice, originalPrice, dishName }) => {
    // Determine CSS class and indicator based on the 'type' prop (veg or non-veg)
    const isVeg = type === 'veg';
    const cardClass = isVeg ? 'dish-card veg' : 'dish-card non-veg';
    const priceClass = isVeg ? 'discount-price' : 'discount-price red-text';
    const indicatorClass = isVeg ? 'indicator green-sq' : 'indicator red-tri';

    return (
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center mb-4">
            <div className={cardClass}>
                {/* Geometric Background and Animation Handled by CSS ::before */}
                
                <h2 className="dish-header">
                    Dish <span className="of-the-day">of The Day</span>
                </h2>
                
                <div className={indicatorClass}></div>
                
                {/* Image component with pulse animation */}
                <img 
                    src={burgerImage} 
                    alt={dishName} 
                    className="burger-img"
                    // Add animation-on-scroll class for dynamic entry
                    data-aos="fade-up" 
                    data-aos-duration="1000"
                />
                
                <div className="price-box">
                    <span className={priceClass}>₹{discountPrice}</span>
                    <span className="original-price">₹{originalPrice}</span>
                </div>
                
                <p className="dish-name">{dishName}</p>
            </div>
        </div>
    );
};

export default DishCard;