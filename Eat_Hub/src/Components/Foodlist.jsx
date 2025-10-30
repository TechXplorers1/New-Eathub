import React from "react";
import "./foodlist.css";
import Buddabowl from "../assets/buddabowl.webp";
import CaliforniaRoll from "../assets/californiaroll.webp";
import CreamedSpeenach from "../assets/creamedspeenach.webp";
import BreakfastBurrito from "../assets/breakfastburrito.webp";
import WontonNoodleSoup from "../assets/wontonnoodlesoup.webp";
import PorkSandwich from "../assets/porksandwitch.webp";
import RoastBeef from "../assets/roastbeefonion.webp";
import AlPastorTaco from "../assets/aipastortaco.webp";
import FiletMignon from "../assets/filetmignon.webp";

const foodItems = [
  {
    id: 1,
    name: "Buddha Bowl",
    category: "Restaurant",
    description:
      "A colorful and nourishing bowl filled with roasted sweet potatoes, broccoli, quinoa, and chickpeas.",
    price: "$14.99",
    image: Buddabowl,
  },
  {
    id: 2,
    name: "California Roll",
    category: "Restaurant",
    description:
      "A favorite for a reason. Made with imitation crab, creamy avocado, and crisp cucumber.",
    price: "$10.99",
    image: CaliforniaRoll,
  },
  {
    id: 3,
    name: "Creamed Spinach",
    category: "Restaurant",
    description:
      "A rich and creamy steakhouse classic. Fresh spinach cooked with garlic, cream, and butter.",
    price: "$9.99",
    image: CreamedSpeenach,
  },
  {
    id: 4,
    name: "Breakfast Burrito",
    category: "Home Food",
    description:
      "A hearty burrito stuffed with scrambled eggs, savory sausage, potatoes, and cheese.",
    price: "$12.00",
    image: BreakfastBurrito,
  },
  {
    id: 5,
    name: "Wonton Noodle Soup",
    category: "Home Food",
    description:
      "A comforting soup with handmade pork wontons, egg noodles, and leafy greens in a rich broth.",
    price: "$15.00",
    image: WontonNoodleSoup,
  },
  {
    id: 6,
    name: "Pulled Pork Sandwich",
    category: "Restaurant",
    description:
      "Our signature slow-smoked pulled pork, piled high on a toasted brioche bun and topped with slaw.",
    price: "$14.99",
    image: PorkSandwich,
  },
  {
    id: 7,
    name: "Roast Beef & Caramelized Onion",
    category: "Home Food",
    description:
      "Thinly sliced roast beef, sweet caramelized onions, and provolone on a toasted baguette.",
    price: "$14.00",
    image: RoastBeef,
  },
  {
    id: 8,
    name: "Al Pastor Taco",
    category: "Restaurant",
    description:
      "Savory marinated pork, slow-cooked on a vertical spit, and served with pineapple and onion.",
    price: "$3.99",
    image: AlPastorTaco,
  },
  {
    id: 9,
    name: "Filet Mignon (8oz)",
    category: "Restaurant",
    description:
      "Our most tender cut of beef, aged for 28 days and cooked to your desired perfection.",
    price: "$45.99",
    image: FiletMignon,
  },
];

const FoodList = () => {
  return (
    <section className="foodlist-section container">
      <h2 className="foodlist-title">What's on your mind today!</h2>
      <p className="foodlist-subtitle">
        🥰 “Cravings kick off here — explore the top picks everyone keeps coming
        back for.”
      </p>

      <div className="foodlist-grid">
        {foodItems.map((item) => (
          <div key={item.id} className="food-card">
            <div className="food-content">
              <div>
                <h3 className="food-name">{item.name}</h3>
                <span className="food-category">{item.category}</span>
                <p className="food-description">{item.description}</p>
                <p className="food-price">{item.price}</p>
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="food-image"
              />
            </div>
            <button className="add-btn">+ Add</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FoodList;
