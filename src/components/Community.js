import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/main.css';
import logo from '../assets/image.png';
import icon from '../assets/mawingu.svg';
import '../styles/app.css';
import microsoft from '../assets/microsoft2.png';
import Footer from "./Layout/Footer";
import Searchpage from "./Searchpage";
import Header from "./Layout/navbar";

export const Community = () => {
  const location = useLocation();
  const resultData2 = location.state?.resData;
  const { generatedText, resData} = location.state || {};
  const resultData = resData?.resData;
  const searchTerm = resData?.quiz;

  return (
    <>
    <Header/>
      <div className="container-fluid chat-with-community">
        <div className="row">
          {/* Left section for large screens */}
          <div 
           className="col-lg-2  sm- hide d-none d-lg-flex flex-column align-items-start py-3" 
            style={{ minWidth: '130px' }}></div>         

          {/* Content area */}
          <div className="col py-3">
          <Searchpage quiz={searchTerm} ans={{ resultData, generatedText }} />

            
          </div>
    
        </div>
      </div>
      <button className="button-2">
        <div className="text-wrapper-4">HOW IT WORKS</div>
      </button>
      <Footer />
    </>
  );
};

export default Community;