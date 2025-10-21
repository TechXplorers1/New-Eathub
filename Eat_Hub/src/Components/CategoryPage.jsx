import React from 'react';
import image1 from '../assets/category1.png';
import image2 from "../assets/category2.png";
import image3 from "../assets/category3.png";


const categoriesData = [
  {
    id: 1,
    title: 'HOME FOOD',
    description: 'Explore Our Qualitative HOME FOOD',
    buttonText: 'Explore Home Food',
    image: image1
  },
  {
    id: 2,
    title: 'RESTAURANT',
    description: 'Order now from Restaurant',
    buttonText: 'Explore Restaurant',
    image: image2
  },
  {
    id: 3,
    title: 'OUR CHEFS',
    description: 'Book a Chefs from Eat Hub',
    buttonText: 'Explore Chefs',
    image: image3
  },
];

const CategoryPage = () => {
  return (
    // Merged CSS into a style block to eliminate file path errors
    <>
      <style>{`
        /* --- General Styling --- */
        .category-page-container {
          padding: 40px 0; /* Horizontal padding removed, content wrapper handles spacing */
          background-color: #f7f0e8; /* Light peach/beige background fills 100% width */
          width: 100%; /* Set to 100% to fill the entire viewport width */
          margin: 0; /* Remove auto margin from outer container */
          font-family: 'Inter', sans-serif;
        }

        /* NEW: Content wrapper to contain title and grid to 90% and center it */
        .category-content-wrapper {
            width: 90%; /* Content constrained to 90% */
            max-width: 1400px; 
            margin: 0 auto; /* Centered */
            padding: 0 20px; /* Add small horizontal padding for tight mobile views */
        }


        .category-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 30px;
          text-align: left;
        }

        .category-highlight {
          color: #ff6600; /* Orange highlight */
        }

        /* --- Grid Layout --- */
        .category-grid {
          display: flex;
          flex-wrap: wrap; 
          gap: 25px;
          justify-content: center; 
        }
        
        /* Media query for tablet and desktop view */
        @media (min-width: 768px) {
            .category-card {
                /* Ensures three cards fit nicely in a row on large screens */
                flex: 1 1 calc(33.333% - 25px); 
                max-width: none !important;
            }
        }
        @media (min-width: 1200px) {
            .category-grid {
                flex-wrap: nowrap;
            }
        }

        /* --- Card Styling --- */
        .category-card {
          position: relative;
          width: 100%; 
          max-width: 380px; 
          height: 400px; /* Card height maintained at 400px */
          overflow: hidden;
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: transform 0.4s ease-in-out, box-shadow 0.4s ease; 
          background-color: transparent; 
        }

        .category-card:hover {
          transform: translateY(-8px); 
          box-shadow: 0 12px 25px rgba(0, 0, 0, 0.2);
        }

        /* --- Image Wrapper (Applies Border Radius) --- */
        .image-content-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden; 
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
          transition: transform 0.6s ease;
        }
        .category-card:hover .image-content-wrapper {
          transform: scale(1.05);
        }

        /* --- Gradient Bar Container (Behind Image) --- */
        .gradient-bar-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1; 
            border-radius: 12px;
            overflow: hidden;
            color: orange;
        }

        /* --- Dynamic Gradient Bar --- */
        .gradient-bar {
            position: absolute;
            bottom: 0;
            right: 0;
            /* Height is 70% of the card height */
            height: 70%;
            /* Width decreased to 70px */
            width: 70px; 
            background: linear-gradient(to bottom, #ff6600, #f7f0e8); 
            
            /* Apply top left and top right border radius to the bar */
            border-top-left-radius: 12px; 
            border-top-right-radius: 12px; 
            /* Remove bottom radius */
            border-bottom-right-radius: 0; 
            color: orange;
        }

        /* --- Overlay Content (Text and Button) --- */
        .category-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0; 
          padding: 20px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
          color: white;
          height: 100%; 
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-start;
          transition: background 0.4s ease;
          border-radius: 12px; 
          z-index: 3; 
        }

        .category-description {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 15px;
        }

        .category-button {
          background-color: #ff6600; 
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 5px;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.3s ease; 
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
        }

        .category-button:hover {
          background-color: #e55c00;
          transform: translateY(-2px);
        }

        /* --- Vertical Title (Over the Gradient Bar) --- */
        .category-title-vertical {
          position: absolute;
          /* Positioning it over the gradient area */
          bottom: 0;
          right: 0;
          height: 70%; /* Same height as gradient bar */
          width: 70px; /* MATCHED NEW GRADIENT BAR WIDTH */
          color: white; 
          
          /* Letter-by-letter stacking with Flexbox */
          display: flex;
          flex-direction: column; 
          justify-content: center;
          align-items: center;
          
          font-size: 1.2rem;
          font-weight: bold;
          line-height: 1.2;
          padding: 10px 0;
          z-index: 25; 
        }

        .category-title-vertical span {
            margin-bottom: 0.1rem;
        }
      `}</style>

      <div className="category-page-container">
        
        {/* New content wrapper for 90% width and centering */}
        <div className="category-content-wrapper">
            <h2 className="category-title" style={{color: "orange"}}>Explore <span className="category-highlight">our Category</span></h2>

            <div className="category-grid">
            {categoriesData.map((category) => (
                <div key={category.id} className="category-card">
                
                {/* 1. Gradient Bar Container (Behind the main content) */}
                <div className="gradient-bar-container">
                    <div className="gradient-bar"></div>
                </div>

                {/* 2. Image Wrapper (Applies background image and radius) */}
                <div
                    className="image-content-wrapper"
                    style={{ backgroundImage: `url(${category.image})` }}
                >
                    {/* Content overlay */}
                    <div className="category-overlay">
                    <p className="category-description">{category.description}</p>
                    <button className="category-button">
                        {category.buttonText}
                    </button>
                    </div>
                </div>
                
                {/* 3. The vertical text element (Over the image and gradient) */}
                <div className="category-title-vertical">
                    {/* Splits the entire title string into individual characters */}
                    {category.title.split('').map((char, index) => (
                        // Display space characters as small vertical gaps
                        <span 
                            key={index}
                            style={{ height: char === ' ' ? '15px' : 'auto', color: char === ' ' ? 'transparent' : 'white' }}
                        >
                            {char === ' ' ? '' : char}
                        </span>
                    ))}
                </div>
                
                </div>
            ))}

            {/* Removed the "New Empty Card" div to keep only three cards */}
            </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
