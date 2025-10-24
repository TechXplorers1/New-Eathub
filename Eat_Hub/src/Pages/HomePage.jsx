import React from "react";
import Header from "../Components/Header.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import Offers from "../Components/Offers.jsx";
import CategoryPage from "../Components/CategoryPage.jsx";
import Dayoftheday from "../Components/Dishoftheday.jsx";
import Sidebar from "../Components/Sidebar.jsx";
import "../App.css";

const HomePage = () => {
  return (
    <div className="homepage-root">
      <Header />
      <div className="content-layout">
        <Sidebar />
        <main className="page-content">
          <HeroSection />
          <Offers />
          <CategoryPage />
          <Dayoftheday />
        </main>
      </div>
    </div>
  );
};

export default HomePage;