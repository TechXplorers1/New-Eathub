import React from 'react';
import './CategoryPage.css'; // Don't forget to import the CSS file
import Cat1 from "../assets/category1.png";
import Cat2 from "../assets/category2.png";
import Cat3 from "../assets/category3.png";

// Mock data for the categories
const categoriesData = [
  {
    id: 1,
    title: 'HOME FOOD',
    description: 'Explore Our Qualitative HOME FOOD',
    buttonText: 'Explore Home Food',
    image: Cat1
  },
  {
    id: 2,
    title: 'RESTAURANT',
    description: 'Order now from Restaurant',
    buttonText: 'Explore Restaurant',
    image: Cat2
  },
  {
    id: 3,
    title: 'OUR CHEFS',
    description: 'Book a Chefs from Eat Hub',
    buttonText: 'Explore Chefs',
    image: Cat3
  },
];

const CategoryPage = () => {
  return (
    <div className="category-page-container">
      <h2 className="category-title">Explore <span className="category-highlight">our Category</span></h2>

      <div className="category-grid">
        {categoriesData.map((category) => (
          <div key={category.id} className="category-card">
            
            <img 
              src={category.image} 
              alt={category.alt} 
              className="category-image" 
            />
            
            <div className="category-overlay">
              <p className="category-description">{category.description}</p>
              <button className="category-button">
                {category.buttonText}
              </button>
            </div>
            
            {/* The vertical text element */}
            <div className="category-title-vertical">
              {category.title.split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;