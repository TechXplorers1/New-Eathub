// src/Pages/HomePage.jsx
import React from "react";
import Header from "../Components/Header.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import Offers from "../Components/Offers.jsx";
import CategoryPage from "../Components/CategoryPage.jsx";
import Dayoftheday from "../Components/Dishoftheday.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import Menu from "../Components/Menu.jsx";
import Banner from "../Components/banner.jsx";
import PromoBanner from "../Components/PromoBanner.jsx";
import Foodlist from "../Components/Foodlist.jsx"
import "../App.css";

const HomePage = () => {
  return (
    <div className="homepage-root">
      <Header />
      <div className="content-layout">
        <Sidebar />
        <main className="page-content">
          <Menu />
          <Banner/>
          <PromoBanner />
          <Foodlist/>
          <Offers />
          <CategoryPage />
          <Dayoftheday />
          <div style={{ height: "1000px", background: "#f5f5f5", margin: "20px 0" }}>
            Scrollable content area
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;