import { useState } from "react";
import "../styles/layout.css";
import chatIcon from "../assets/image.png"; 


export default function ChatUI() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
        <div className="chat-box">
          <h2 className="chat-title">Hi There 👋</h2>
          <p className="chat-message">
            Hey There! Welcome To AI Master. We Reply To Every Single Message So Feel Free To Ask Us Anything
          </p>
          <div className="chat-middle-card">
            
          <div className="chat-card">
            <div className="chat-avatar"></div>
            <div>
              <p className="chat-label">AI Master Usual Reply Time</p>
              <p className="chat-time">⏳ 2 Min</p>
            </div>
          </div>
          <input
        type="text"
        className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        placeholder="Type your message..."
      />
    
          <button className="chat-btn1">Send Message to Budddy</button>
          </div>

          <div className="chat-card">
            <p className="chat-label">Ask Community</p>
            <button className="chat-btn">Send Message</button>
          </div>

          <div className="chat-recent">
            <h3 className="chat-label">Recent Conversation</h3>
            <div className="chat-recent-item">
              <div className="chat-avatar"></div>
              <div>
                <p className="chat-label">Hey There, Budddy Updates...</p>
                <p className="chat-time">Budddy - 2d ago</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}
