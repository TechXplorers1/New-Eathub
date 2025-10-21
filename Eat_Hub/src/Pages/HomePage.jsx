import react from "react";
import Header from "../Components/Header.jsx";
import HeroSection from "../Components/HeroSection.jsx";
import Offers from "../Components/Offers.jsx";
import CategoryPage from "../Components/CategoryPage.jsx";
import Dayoftheday from "../Components/Dishoftheday.jsx";

const HomePage = () => {
    return (
        <div style={{margin:"0%",padding:"0%"}}>
            <Header/>
            <HeroSection/>
            <Offers/>
            <CategoryPage/>
            <Dayoftheday/>
        </div>
    );
}

export default HomePage;