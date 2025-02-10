import React, { useEffect } from "react";

const UserWayWidget = () => {
  useEffect(() => {
    const script = document.createElement("script");
    
    script.setAttribute("data-position", 5);
    script.setAttribute("data-size", "small");
    script.setAttribute("data-color", "#1e99d7");
    script.setAttribute("data-type", "2");
    script.setAttribute("data-account", "9bypO3Ua9N");
    script.src = "https://cdn.userway.org/widget.js";
    
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); 

  return null; 
};

export default UserWayWidget;
