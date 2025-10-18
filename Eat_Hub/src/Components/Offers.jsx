import React from 'react';
import './Offers.css'; 
import offer1 from "../assets/HeroImg.png";
import offer2 from "../assets/roastedchicken.png";
import offer3 from "../assets/cherrycake.png";
import offer4 from "../assets/kaddichecken.png";
import offer5 from "../assets/greenchicken.png";
import offer6 from "../assets/jollofrice.png";
import offer7 from "../assets/redcolorrice.png.jpg";
import offer8 from "../assets/chickenlegs.png";

const offersData = [
  { id: 1, name: 'cheese lati pastry', image: offer1, discount: '25%Off', alt: "Delicious cheesecake with a cherry on top" },
  { id: 2, name: 'cheese lati pastry', image: offer2, discount: '25%Off', alt: "Grilled chicken with vegetables on a plate" },
  { id: 3, name: 'cheese lati pastry', image: offer3, discount: '15%Off', alt: "Chocolate cake with strawberries on top" },
  { id: 4, name: 'cheese lati pastry', image: offer4, discount: '25%Off', alt: 'Meat skewers with a spicy sauce on a plate' },
  { id: 5, name: 'cheese lati pastry', image: offer5, discount: '25%Off', alt: 'Stew with greens and chicken in a white bowl' },
  { id: 6, name: 'cheese lati pastry', image: offer6, discount: '25%Off', alt: 'Small pasta with tomato sauce and herbs' },
  { id: 7, name: 'cheese lati pastry', image: offer7, discount: '25%Off', alt: 'Beans stew with fried plantain slices' },
  { id: 8, name: 'cheese lati pastry', image: offer8, discount: '25%Off', alt: 'Jollof rice with fried chicken and sauce' },
];

const OffersPage = () => {
  return (
    <div className="offers-page-container">
      
      {/* Title wrapper is crucial for containing the title and line correctly */}
      <div className="title-wrapper">
        <h2 className="offers-title">Today's Hot Offers</h2>
        <hr className="title-separator" /> 
      </div>
      
      <div className="offers-grid">
        {offersData.map((offer) => (
          <div key={offer.id} className="offer-card">
            <div className="offer-image-container">
              <img src={offer.image} alt={offer.alt} className="offer-image" />
              <div className="discount-tag red-rounded-tag">{offer.discount}</div>
            </div>
            <p className="offer-name">{offer.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffersPage;