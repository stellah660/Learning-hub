import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/main.css';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Function to handle search and navigate to the Community page
  const handleSearch = () => {
    console.log("Search term:", searchTerm);

    // Navigate to the community page and pass the search term
    navigate(`/community?search=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div className="landing-page">
      <div className="div">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button onClick={handleSearch} className="search-button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
