import React, {useState} from 'react'
import chat from '../assets/image.png'
import copilot from '../assets/logos/copilot.png'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function Searchpage(props) {
  const location = useLocation();
  const searchResults = location.state?.generatedText || "No results found.";
  const maxLength = 300;
  const [expanded, setExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState('');
    const navigate = useNavigate();
  

  // const doSearch = async (ev) => {
  //   ev.preventDefault();
  //   try {
  //     const response = await axios.post(
  //       'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyD0AMHWeaGh1eHM1gUDonN_ll_imCUfWZ0',
  //       {
  //         contents: [{ parts: [{ text: searchTerm }] }]
  //       },
  //       { headers: { 'Content-Type': 'application/json' } }
  //     );
  
  //     const generatedText = response.data.candidates[0]?.content?.parts[0]?.text || "No results found.";
  //     navigate('/community', { state: { generatedText} }); 
  //   } catch (error) {
  //     console.error('Error fetching results:', error);
  //   }
  // };
  
  const trimmedText = searchResults.length > maxLength
    ? searchResults.substring(0, maxLength) + "..."
    : searchResults;
    const formatText = (text) => {
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Convert **bold** to <strong>
        .replace(/\*(.*?)\*/g, '<em>$1</em>') // Convert *italic* to <em>
        .replace(/\n\n/g, '</p><p>') // Replace double newlines with paragraph breaks
        .replace(/\n/g, '<br />') // Replace single newlines with <br> for line breaks
        .replace(/^|$/, '<p>$&</p>'); // Ensure entire text is wrapped in <p>
    };
    

    return (
    <div className="container-fluid research-page">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 left-section">
          <h2 className="title">{props.quiz}</h2>
          <div className="icon-label">
              <small>Recommended</small>
          </div>
          <hr style={{ marginRight: '20px' }} />
         
          <div className="content-box">
          
            {/* <h5>Causes of Cholera</h5> */}

            <p dangerouslySetInnerHTML={{
          __html: expanded ? formatText(searchResults) : formatText(trimmedText)
        }}></p>
            {searchResults.length > maxLength && (
              <button 
                onClick={() => setExpanded(!expanded)} 
                className="btn btn-link"
              >
                {expanded ? "Show Less" : "Read More"}
              </button>
            )}
        
          
            <div className="icon-label">
              <img alt="Verified" src={copilot} />
              <small>Copilot</small>
            </div>
          </div>
          <hr style={{ marginRight: '20px' }} />
          <div className="content-box">
          <>

            {Array.isArray(props.ans) && props.ans.length > 0 ? (
                <>
                <div className="blog">
                    <div className="overlap-2">
                    <div className="text-wrapper-8">·</div>
                    <div className="frame-8">
                        <div className="text-wrapper-9">Verified Answer</div>
                    </div>
                    </div>
                    {props.ans.map((item, index) => (
                    <>
                        <div className="text-wrapper-10">{item.subtopic_name}</div>
                        <p className="p">
                        {item.content}
                        </p>
                    </>
                    ))}
                    
                </div>
                <hr style={{ marginRight: '20px' }} />
                <div className="search-box">
                {/* <form onSubmit={doSearch}>
                    <span className="search-icon">
                    <i className="bi bi-search"></i>
                    </span>
                    <input 
                    type="text" 
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="form-control" placeholder="Search" />
                </form> */}
                <form >
          <input
            type="text"
            placeholder="Search... 🔍"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </form>
                </div>
                </>
            ) : (
                <>
                <p>No result found.</p>
                <hr style={{ marginRight: '20px' }} />
                <div className="search-box">
                    <span className="search-icon">
                    <i className="bi bi-search"></i>
                    </span>
                    <input type="text" className="form-control" placeholder="Search" />
                </div>
                </>
            )}
            </>
          </div>

        </div>

        {/* Right Section */}
        <div className="col-md-4 right-section">
          <button className="related-btn">More related questions</button>
          <ul className="question-list">
            <li>What are the prevention and control of cholera?</li>
            <li>How can cholera spread?</li>
            <li>What is the best treatment for cholera?</li>
          </ul>

          <h6 className="see-list">See the full list</h6>
          <p>Recommended Topic</p>
          <div className="topics">
            {['Technology', 'Money', 'Business', 'Productivity', 'Art', 'Mindfulness', 'Yada Yada'].map((topic) => (
              <button key={topic} className="topic-btn">{topic}</button>
            ))}
          </div>
         
          <div className="chat">
            <img className="chatbox" alt="Logo" src={chat} />
            </div>
        </div>
      </div>
    </div>
      );
}

export default Searchpage
