import React from 'react';
import icon from "../../assets/LogoMawinguf.png";
import "../../styles/layout.css";

function Header() {

return (
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
);
}

export default Header;