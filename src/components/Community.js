import React from "react";
import { useLocation } from "react-router-dom";
import '../styles/main.css';
import logo from '../assets/image.png';
import icon from '../assets/mawingu.svg';
import '../styles/app.css';
import microsoft from '../assets/microsoft2.png';
import Footer from "./Layout/Footer";
import Searchpage from "./Searchpage";

export const Community = () => {
  const location = useLocation();
  const resultData2 = location.state?.resData;
  const { generatedText, resData} = location.state || {};
  const resultData = resData?.resData;
  const searchTerm = resData?.quiz;

  return (
    <>
      <div className="container-fluid chat-with-community">
        <div className="row">
          {/* Left section for large screens */}
          <div 
            className="col-lg-2 d-none d-lg-flex flex-column align-items-start py-3" 
            style={{ minWidth: '120px' }}
          >
            <img src={icon} alt="Logo" className="img-fluid mb-3" style={{ height: '80px' }} />
            <div className="translate">
              <button className="button-20">
                <div className="text-wrapper-20">Swahili</div>
              </button> 
              <button className="button-21">
                <div className="text-wrapper-20">Somali</div>
              </button>
            </div>
          </div>

          {/* Top section for small screens */}
          <div className="col-12 d-flex d-lg-none justify-content-between align-items-center py-3">
            <img src={icon} alt="Logo" className="img-fluid" style={{ height: '60px' }} />
            <div className="translate">
              <button className="button-20">
                <div className="text-wrapper-20">Swahili</div>
              </button> 
              <button className="button-21">
                <div className="text-wrapper-20">Somali</div>
              </button>
            </div>

          </div>

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