import React, {useState} from 'react'
import chat from '../assets/image.png'
import copilot from '../assets/logos/copilot.png'
import { useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import ChatUI from "./chat";

function Searchpage(props) {
  const location = useLocation();
  const searchResults = location.state?.generatedText || "No results found.";
  const searchResults2 = location.state?.resData || "No results found.";
  const [searchResults3, setSearchResults3] = useState("");
  const [searchResults1, setSearchResults1] = useState("");
  const maxLength = 300;
  const [expanded, setExpanded] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
      
  const navigate = useNavigate();
  const { ans } = props;  // Destructure quiz and ans from props
  const { resultData, generatedText } = ans || {}; 



    
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
    setSearchResults3(responseData2); 
   
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
    console.log(searchResults2);
    console.log(searchResults);
    

    return (
    <div className="container-fluid research-page">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-8 left-section">
          <h2 className="title">{props.quiz}</h2>
          <div className="icon-label">
              <small>Verified Results</small>
          </div>
          
                {Array.isArray(resultData) && resultData.length > 0 ? (
            resultData.map((item, index) => (
              <div key={index}>
                <div className="text-wrapper-10">{item.subtopic_name}</div>
                <p className="p">{item.content}</p>
              </div>
            ))
          ) : (
            <p>No matches found.</p>
          )}
          <hr style={{ marginRight: '20px' }} />
          <div className="icon-label">
              <small>AI Master</small>
              </div>
            
             {searchResults === "No results found." ? (
              <p className="p">{searchResults}</p>
            ) : (
              <>
                <p dangerouslySetInnerHTML={{
                  __html: expanded2 ? formatText(searchResults) : formatText(searchResults.substring(0, maxLength) + (searchResults.length > maxLength ? "..." : ""))
                }}></p>

                {searchResults.length > maxLength && (
                  <button onClick={() => setExpanded2(!expanded2)} className="btn btn-link">
                    {expanded2 ? "Show Less" : "Read More"}
                  </button>
                )}
              </>
            )}
         
          <div className="content-box">
            <div className="icon-label">
              <img alt="Verified" src={copilot} />
              <small>Copilot</small>
            </div>
          </div>
          <hr style={{ marginRight: '20px' }} />
          <div className="content-box">
          </div>

    
                <div className="search-box">
                  <form onSubmit={doSearch}>
                    <input
                      type="text"
                      placeholder="Search "
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="search-input1"
                     
                    />
                  </form>
                </div>
        
               

        </div>

        {/* Right Section */}
        <div className="col-md-4 right-section">
          <button className="related-btn">More related questions</button>
          {/* <ul className="question-list">
            <li>What are the prevention and control of cholera?</li>
            <li>How can cholera spread?</li>
            <li>What is the best treatment for cholera?</li>
          </ul> */}
          <ul className="question-list">
            {[
              "What are the prevention and control of cholera?",
              "How can cholera spread?",
              "What is the best treatment for cholera?"
            ].map((question, index) => (
              <li key={index}>
                <button
                  className="question-btn"
                  onClick={() => {
                    setSearchTerm(question);
                    doSearch({ preventDefault: () => {} });
                  }}
                  style={{
                    background: "none",
                    border: "none",
                    color: "blue",
                    cursor: "pointer",
                    textAlign: "left",
                    padding: "5px",
                    fontSize: "14px",
                  }}
                >
                  {question}
                </button>
              </li>
            ))}
          </ul>


          <h6 className="see-list">See the full list</h6>
          <p>Recommended Topic</p>
          <div className="topics">
            {/* {['Technology', 'Money', 'Business', 'Productivity', 'Art', 'Mindfulness', 'Yada Yada'].map((topic) => (
              <button key={topic} className="topic-btn">{topic}</button>
            ))} */}
            {['Technology', 'Money', 'Business', 'Productivity', 'Art', 'Mindfulness', 'Yada Yada'].map((topic) => (
              <button 
                key={topic} 
                className="topic-btn" 
                onClick={() => {
                  setSearchTerm(topic);
                  doSearch({ preventDefault: () => {} }); // Trigger search
                }}
              >
                {topic}
              </button>
            ))}
          </div>
         
          <div className="chat" onClick={() => setIsChatOpen(!isChatOpen)}>
            <img className="chatbox" alt="Chat Icon" src={chat} />
          </div>
          {isChatOpen && <ChatUI closeChat={() => setIsChatOpen(false)} />}

        </div>
      </div>
    </div>
      );
}

export default Searchpage