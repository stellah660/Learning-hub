
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../styles/app.css';


function Mainmenu() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState('');
  const navigate = useNavigate();
  const [text, setText] = useState('');
          const [translation, setTranslation] = useState('');
          const [targetLanguage, setTargetLanguage] = useState('sw'); 

  // const doSearch = (ev) => {
  //   ev.preventDefault();

  //   let data = {
  //     "searchwords": searchTerm
  //   };

  //   let config = {
  //     method: 'post',
  //     maxBodyLength: Infinity,
  //     url: 'https://learninghub.mawingu.co/api/searchdata',
  //     headers: { 
  //       'Content-Type': 'application/json'
  //     },
  //     data: data
  //   };

  //   axios.request(config)
  //     .then((response) => {
  //       const respoData = {
  //         resData: response.data, 
  //         quiz: searchTerm
  //       };
  //       navigate('/community', { state: { resData: respoData } });
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   };
    
  const doSearch = async (searchTerm) => {
    let data = { "searchwords": searchTerm };
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'https://learninghub.mawingu.co/api/searchdata',
      headers: { 'Content-Type': 'application/json' },
      data: data
    };
  
    try {
      const response = await axios.request(config);
      return { resData: response.data, quiz: searchTerm }; // Just return data
    } catch (error) {
      console.error("Error in doSearch:", error);
      return null;
    }
  };
  
  const doSearch1 = async (ev) => {
    ev.preventDefault();
    try {
      const response = await axios.post(
        'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD0AMHWeaGh1eHM1gUDonN_ll_imCUfWZ0',
        {
          contents: [{ parts: [{ text: searchTerm }] }]
        },
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      return response.data.candidates[0]?.content?.parts[0]?.text || "No results found."; // Just return data
    } catch (error) {
      console.error('Error in doSearch1:', error);
      return null;
    }
  };
  // const handleSubmit = (ev) => {
  //   ev.preventDefault(); 
  //   doSearch(ev); 
  //   doSearch1(ev);
  // };
  const handleSubmit = async (ev) => {
    ev.preventDefault(); // Prevent default form submission
  
    try {
      const [searchData, generatedTextData] = await Promise.all([
        doSearch(ev, true),  // Pass a flag to return data instead of navigating
        doSearch1(ev, true)  // Same here
      ]);
  
      // Navigate once, combining results
      navigate('/community', { state: { resData: searchData, generatedText: generatedTextData } });
  
    } catch (error) {
      console.error("Error in search functions:", error);
    }
  };
  
  return (
    <div className="topsearch"> 
      <div className="topsearch-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search...                                                          🔍"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </form>
       
      </div>
    <div className="mainmenu-container" style={{ height: '70vh', overflowY: 'hidden', overflowX: 'hidden' ,marginleft : '20%'}}>
      
      
    
      <div className="cards">
  {[
    { 
      description: "Access resources to enhance your knowledge.", 
      image: "/images/image1.png", 
      link: "/education" 
    },
    { description: "Stay informed about health and wellness.", image: "/images/image2.png", link: "/register" },
    { description: "Connect and share with your community.", image: "/images/image3.png", link: "/social" },
    { description: "Explore and celebrate diverse cultures.", image: "/images/image4.png", link: "/culture" },
    { description: "Manage your finances effectively.", image: "/images/image5.png", link: "/financial" },
    { description: "Understand your legal rights and obligations.", image: "/images/image6.png", link: "/legal" }
  ].map((item, index) => (
    <div 
      key={index} 
      className="card" 
      onClick={() => navigate(item.link)}
    >
      <img src={item.image} alt="card image" className="card-image" />
      <div className="card-content">
        <p className="card-description">{item.description}</p>
        <a href={item.link} className="read-more">View More</a>
      </div>
    </div>
  ))}
</div>


    </div>
    </div>
  );
}

export default Mainmenu;

