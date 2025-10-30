import React from "react";
import "./PromoBanner.css";
import SushiImage from "../assets/sushipalace.webp";
import Sophie from "../assets/sophiesoups.webp";
import JaviersTacos from "../assets/javiertacos.webp";
import Vegan from "../assets/vegan.webp";
import Sweetspot from "../assets/sweetspot.webp";
import Greenbowl from "../assets/greenbowl.webp";
import BrendasBBQ from "../assets/brenda's-BBQ.webp";


const restaurants = [
  {
    id: 1,
    name: "Sushi Palace",
    category: "Japanese",
    rating: 4.9,
    time: "30 min",
    delivery: ["Delivery"],
    image: SushiImage,
  },
  {
    id: 2,
    name: "Sophie's Soups",
    category: "Soups & Stews",
    rating: 4.9,
    time: "20 min",
    delivery: ["Delivery"],
    image: Sophie,
  },
  {
    id: 3,
    name: "Javier's Tacos",
    category: "Authentic Mexican",
    rating: 4.9,
    time: "20 min",
    delivery: ["Delivery"],
    image: JaviersTacos,
  },
  {
    id: 4,
    name: "The Vegan Spot",
    category: "Vegan",
    rating: 4.9,
    time: "20 min",
    delivery: ["Delivery"],
    image: Vegan,
  },
  {
    id: 5,
    name: "Maria's Kitchen",
    category: "Homestyle Italian",
    rating: 4.9,
    time: "30 min",
    delivery: ["Delivery"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "The Sweet Spot",
    category: "Desserts",
    rating: 4.9,
    time: "18 min",
    delivery: ["Delivery", "Pickup"],
    image: Sweetspot,
  },
  {
    id: 7,
    name: "The Green Bowl",
    category: "Salads",
    rating: 4.9,
    time: "15 min",
    delivery: ["Pickup"],
    image: Greenbowl,
  },
  {
    id: 8,
    name: "Brenda's BBQ",
    category: "Southern BBQ",
    rating: 4.9,
    time: "45 min",
    delivery: ["Delivery"],
    image: BrendasBBQ,
  },
];

const Restaurants = () => {
  return (
    <section className="restaurants-section container">
      <h2 className="restaurants-title">Picked from your location</h2>

      <div className="restaurants-grid">
        {restaurants.map((r) => (
          <div className="restaurant-card" key={r.id}>
            <div className="restaurant-image-wrapper">
              <img src={r.image} alt={r.name} className="restaurant-image" />
              <div className="badges">
                {r.delivery.map((type, i) => (
                  <span key={i} className="badge">
                    {type}
                  </span>
                ))}
              </div>
            </div>

            <div className="restaurant-info">
              <div className="restaurant-header">
                <h3 className="restaurant-name">{r.name}</h3>
                <div className="rating">
                  ⭐ <span>{r.rating}</span>
                </div>
              </div>
              <p className="restaurant-category">{r.category}</p>
              <div className="restaurant-footer">
                <span className="time">🕒 {r.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Restaurants;
