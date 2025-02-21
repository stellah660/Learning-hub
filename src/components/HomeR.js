
import React, { useState } from "react";
import "../styles/layout.css";
import icon from "../assets/LogoMawinguf.png";
import Footer from "./Layout/Footer";
import { useNavigate } from "react-router-dom";
import chat from '../assets/image.png'
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
import ChatUI from "./chat";

function HomeR() {
  const styles = {
        container: {
          maxWidth: "300px",
          width: "80%",
          margin: "0 auto",
          padding: "20px 30px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          float: "right",
        },
        formGroup: {
          marginBottom: "15px",
          textAlign: "left",
        },
        label: {
          display: "block",
          marginBottom: "5px",
          fontSize: "14px",
        },
        input: {
          width: "100%",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "14px",
        },
        checkboxGroup: {
          display: "flex",
          alignItems: "center",
          marginBottom: "20px",
        },
        checkbox: {
          marginRight: "5px",
        },
        checkboxLabel: {
          fontSize: "14px",
        },
        button: {
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "14px",
          fontWeight: "bold",
          cursor: "pointer",
        },
        buttonHover: {
          backgroundColor: "#0056b3",
        },
        divider: {
          margin: "20px 0",
          display: "flex",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          fontSize: "14px",
          color: "#666",
        },
        googleButton: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          cursor: "pointer",
          backgroundColor: "#fff",
        },
        googleLogo: {
          height: "16px",
          marginRight: "10px",
        },
        footer: {
          marginTop: "20px",
          fontSize: "12px",
        },
        link: {
          color: "#007bff",
          textDecoration: "none",
        },
      };
    
  const [showSearchModal, setShowSearchModal] = useState(false);
  const openSearchModal = () => setShowSearchModal(true);
  const closeSearchModal = () => setShowSearchModal(false);
  const [searchTerm2, setSearchTerm2] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState("");
  const [searchResults2, setSearchResults2] = useState("");
  const [searchResults1, setSearchResults1] = useState("");
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const openLoginModal = () => setShowLoginModal(true);
  const closeLoginModal = () => setShowLoginModal(false);
  const openRegisterModal = () => setShowRegisterModal(true);
  const closeRegisterModal = () => setShowRegisterModal(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
    
  const handleGoogleSignIn = () => {
 
    console.log("Google Sign-In clicked");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Keep Logged In:", keepLoggedIn);
  };


  const topCards = [
    
    { title: "Education", text: "Discover a wealth of resources designed to expand your knowledge and sharpen your skills. Whether you're learning a new subject or deepening your expertise, find the right tools", image: educate },
    { title: "Health", text: "Stay informed on how to lead a healthier life with expert advice and wellness tips. From nutrition to mental well-being, explore guides that help you take charge of your health.", image: health },
    { title: "Social", text: "Foster meaningful connections and build strong relationships within your community.Learn how to engage with others, improve communication, and create lasting bonds.", image: social },
  ];


  const bottomCards = [
    { title: "Culture", text: "Immerse yourself in the richness of diverse traditions, arts, and customs from around the world. Gain a deeper appreciation for cultural heritage and its impact on society.", image: culture },
    { title: "Financial", text: "Take control of your financial future with expert guidance on budgeting, saving, and investing. Learn practical strategies to achieve stability and grow your wealth.", image: financial },
    { title: "Legal", text: "Empower yourself with knowledge about your fundamental rights and legal protections. Access resources that help you navigate legal matters with confidence and clarity.", image: legal },
  ];


const doSearch = async (ev) => {
  ev.preventDefault();
  try {
    
    const [response1, response2] = await Promise.all([
      axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD0AMHWeaGh1eHM1gUDonN_ll_imCUfWZ0', {
        contents: [{ parts: [{ text: searchTerm }] }]
      }, { headers: { 'Content-Type': 'application/json' } }),
      
      axios.post('https://learninghub.mawingu.co/api/searchdata', {
        searchwords: searchTerm
      }, { headers: { 'Content-Type': 'application/json' } })
    ]);

    const generatedText = response1.data.candidates[0]?.content?.parts[0]?.text || "No results found.";
    setSearchResults1(generatedText); 

    const responseData2 =response2.data;
    setSearchResults2(responseData2); 
   
    navigate('/community', { 
      state: { 
        generatedText: generatedText, 
        resData: { resData: responseData2, quiz: searchTerm }
      }
    });
  } catch (error) {
    console.error('Error fetching results:', error);
  }
};


const doSearch1 = async (ev) => {
  ev.preventDefault();
  try {
    
    const [response1, response2] = await Promise.all([
      axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD0AMHWeaGh1eHM1gUDonN_ll_imCUfWZ0', {
        contents: [{ parts: [{ text: searchTerm2 }] }]
      }, { headers: { 'Content-Type': 'application/json' } }),
      
      axios.post('https://learninghub.mawingu.co/api/searchdata', {
        searchwords: searchTerm2
      }, { headers: { 'Content-Type': 'application/json' } })
    ]);

    const generatedText = response1.data.candidates[0]?.content?.parts[0]?.text || "No results found.";
    setSearchResults1(generatedText); 

    const responseData2 =response2.data;
    setSearchResults2(responseData2); 
   
    navigate('/community', { 
      state: { 
        generatedText: generatedText, 
        resData: { resData: responseData2, quiz: searchTerm }
      }
    });
  } catch (error) {
    console.error('Error fetching results:', error);
  }
};


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
          <form onSubmit={doSearch1}>
              <input
              type="text"
              placeholder="Search the Web"
              value={searchTerm2}
              className="search-input1"
              onChange={(e) => setSearchTerm2(e.target.value)}
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
          <button className="auth-button2"  onClick={() => openLoginModal()} >
                  Log in
                </button>
                <button className="auth-button1"  onClick={() => openRegisterModal()}
                >
                  Signup
                </button>

          </div>
          <br/>
         
          <h1 className="category-heading">Top Categories</h1>
        </div>
        <div className="card-right">
          <img src={mcimg} alt="Main Content" className="responsive-img" />
        </div>

      </div>
      {showSearchModal && (
        <div className="modal-overlay2">
          <div className="modal-content">
            <span className="close-button" onClick={() => setShowSearchModal(false)}>
              &times;
            </span>
            <h2 className="content7">Search</h2>
            <form onSubmit={doSearch}>
            <input
              type="text"
              placeholder="Search ..."
              value={searchTerm}
              className="search-input2"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            </form>
          </div>
        </div>
      )}


     
      <div className="card-container1">
        {topCards.map((card, index) => (
          <div key={index} className="card1">
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-content">
              <h5>{card.title}</h5>
              <p>{card.text}</p>
              <a href="#"   onClick={() => openSearchModal(card.title, card.text, card.image)}>Read More</a>
            </div>
          </div>
        ))}
      {/* </div>
      
      <div className="card-container1"> */}
        {bottomCards.map((card, index) => (
          <div key={index} className="card1">
            <img src={card.image} alt={card.title} className="card-img" />
            <div className="card-content">
              <h5>{card.title}</h5>
              <p>{card.text}</p>
              <a href="#"  onClick={() => openSearchModal(card.title, card.text, card.image)}>Read More</a>
            </div>
          </div>
        ))}
      </div>
   
      <div className="chat" onClick={() => setIsChatOpen(!isChatOpen)}>
        <img className="chatbox" alt="Chat Icon" src={chat} />
      </div>
      {isChatOpen && <ChatUI closeChat={() => setIsChatOpen(false)} />}



      <Footer />
      {showLoginModal && (
          <div className="modal-overlay1">
            <div style={styles.container}>
      <h2>Sign in</h2>
         <form onSubmit={handleSubmit} style={styles.form}>
           <div style={styles.formGroup}>
           <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
             <label htmlFor="password" style={styles.label}>Password</label>
             <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="keep-logged-in"
            name="keep-logged-in"
            checked={keepLoggedIn}
            onChange={(e) => setKeepLoggedIn(e.target.checked)}
            style={styles.checkbox}
          />
          <label htmlFor="keep-logged-in" style={styles.checkboxLabel}>
            Keep me logged in
          </label>
        </div>
           {/* <button type="submit" style={styles.button}>Sign in</button> */}
         </form>
         {/* <div style={styles.divider}>or</div> */}
         <div className="modal-buttons">
                   <button className="button close-button" onClick={closeLoginModal}>
                     Close
                     </button>
                   <button className="button submit-button">Login</button>
                 </div>
         <div style={styles.footer}>
          Need an account? <a href="#" style={styles.link}>Create one</a>
         </div>
       </div>
       </div>
        )}

{showRegisterModal && (
          <div className="modal-overlay1">
            <div style={styles.container}>
      <h2>Sign in</h2>
         <form onSubmit={handleSubmit} style={styles.form}>
           <div style={styles.formGroup}>
           <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
            required
          />
        </div>
        <div style={styles.formGroup}>
             <label htmlFor="password" style={styles.label}>Password</label>
             <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
            required
          />
        </div>
        
           {/* <button type="submit" style={styles.button}>Sign in</button> */}
         </form>
         {/* <div style={styles.divider}>or</div> */}
         <div className="modal-buttons">
                   <button className="button close-button" onClick={closeRegisterModal}>
                     Close
                     </button>
                   <button className="button submit-button">Signup</button>
                 </div>
         
       </div>
       </div>
        )}
      
  
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

