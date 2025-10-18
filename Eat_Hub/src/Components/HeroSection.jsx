import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroSection.css';
//NOTE:The image import is no longer needed in JSX,but keep it if you need the path elsewhere.
//const cheesecakeImg='../Assets/HeroImg.png';

const HeroSection = () => {
const [animated,setAnimated] = useState(false);

useEffect(() => {
//Trigger animation on component mount
const timer = setTimeout(() => {
setAnimated(true);
},100);

return () => clearTimeout(timer);
},[]);

return (
<div className={`hero-section ${animated ? 'is-visible' : ''}`}>
{/*Overlay for text readability over the background image*/}
<div className="hero-overlay"></div>

<div className="container-fluid h-100">
<div className="row h-100 align-items-center">

{/*CONTENT COLUMN*/}
<div className="col-12 col-lg-8 hero-content">
<h1 className="display-4 text-white">
{/*H1 LINE INDICATOR*/}
<span className={`line-indicator h1-indicator ${animated ? 'animate-in' : ''}`}></span>
<span className={`text-line line-1 ${animated ? 'animate-in' : ''}`}>
Experience the joy of dining <br/> your way with
</span>
<br />
</h1>

{/*PARAGRAPH TEXT - Removed text-white-50 class,relying on CSS for pure white*/}
<p className={`lead mt-3 subtext ${animated ? 'animate-in' : ''}`}>
{/*PARAGRAPH LINE INDICATOR*/}
<span className={`line-indicator p-indicator ${animated ? 'animate-in' : ''}`}></span>
Discover the best local restaurants and professional chefs,all in one place.Your next amazing meal is just a click away.
</p>

<div className={`d-flex mt-4 buttons-group ${animated ? 'animate-in' : ''}`}>
<button className="btn btn-outline-light me-3">Explore Eat Hub</button>
<button className="btn btn-warning btn-book-chef">Book a chef</button>
</div>
</div>
</div>
</div>
</div>
);
};

export default HeroSection;
