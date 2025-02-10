
import React, { useState } from "react";
import "../styles/layout.css";
import icon from "../assets/LogoMawinguf.png";
import Footer from "./Layout/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import mcimg from "../assets/right.png";
import check from "../assets/Check-3.png";
import educate from "../assets/Education.png";
import health from "../assets/Health.png";
import social from "../assets/social.png";
import culture from "../assets/culture.png";
import financial from "../assets/Finacial.png";
import legal from "../assets/Legal.png";
import tick from "../assets/tick.png";

function HomeR() {
  const topCards = [
    
    { title: "Education", text: "Discover a wealth of resources designed to expand your knowledge and sharpen your skills. Whether you're learning a new subject or deepening your expertise, find the right tools", image: educate },
    { title: "Health", text: "Stay informed on how to lead a healthier life with expert advice and wellness tips. From nutrition to mental well-being, explore guides that help you take charge of your health.", image: health },
    { title: "Social", text: "Foster meaningful connections and build strong relationships within your community.Learn how to engage with others, improve communication, and create lasting bonds.", image: social },
  ];


  const bottomCards = [
    { title: "Culture", text: "Immerse yourself in the richness of diverse traditions, arts, and customs from around the world. Gain a deeper appreciation for cultural heritage and its impact on society.", image: culture },
    { title: "Financial", text: "Take control of your financial future with expert guidance on budgeting, saving, and investing. Learn practical strategies to achieve stability and grow your wealth.", image: financial },
    { title: "Legal", text: "Empower yourself with knowledge about your rights and legal protections. Access resources that help you navigate legal matters with confidence and clarity.", image: legal },
  ];
  const [searchTerm, setSearchTerm] = useState("");


  return (
    <div className="land">
      <div className="top-nav">
        <img className="Logo" alt="Logo" src={icon} />
        <div className="button-container" >
          <button className="auth-button" >
                  Swahili
                </button>
                <button className="auth-button" 
                >
                  Somali
                </button>
          </div>
      </div>

        <div className="maincontent">
          <div className="card-left">
          <div className="topsearch-bar1">
          <form   >
            <input
              type="text"
              placeholder="Search the Web..."
              value={searchTerm}
              className="search-input1"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </form>
        
          </div>
          <h1 className="title">Yard Ya Content</h1>
          <p className="content7">The Mawingu Yard Ya Content is a digital platform providing easy access to educational, entertainment, and business resources, promoting digital inclusion through curated content for learning, entrepreneurship, and leisure.</p>
          <div className="badge-container">
            <img className="Logo1" alt="Logo" src={tick} /><p className="p1" >Educational Resources</p>
            <img className="Logo1" alt="Logo" src={tick} /><p>Entertainment</p>
            <img className="Logo1" alt="Logo" src={tick}  /><p>Business Tools</p>
          </div>
          <div className="button-container1" >
          <button className="auth-button2" >
                  Log in
                </button>
                <button className="auth-button1" 
                >
                  Signup
                </button>

          </div>
          <h1 className="category-heading">Top Categories</h1>
        </div>
        <div className="card-right">
          <img src={mcimg} alt="Main Content" className="responsive-img" />
        </div>

      </div>

     
      <div className="card-container1">
        {topCards.map((card, index) => (
          <div key={index} className="card1">
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-content">
              <h5>{card.title}</h5>
              <p>{card.text}</p>
              <a href="#" >Read More</a>
            </div>
          </div>
        ))}
      </div>

      <div className="card-container1">
        {bottomCards.map((card, index) => (
          <div key={index} className="card1">
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-content">
              <h5>{card.title}</h5>
              <p>{card.text}</p>
              <a href="#" >Read More</a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default HomeR;
function BadgeLink({ text }) {
  return (
    <div className="badge-link">
      <span className="badge-icon">✓</span>
      <span>{text}</span>
    </div>
  );
}

