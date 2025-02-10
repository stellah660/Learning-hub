// import React from "react";
// import { useLocation } from "react-router-dom";
// import '../styles/main.css';
// import logo from '../assets/image.png'
// import icon from '../assets/mawingu.svg'
// import '../styles/app.css';
// import microsoft from '../assets/microsoft2.png'

// export const Community = () => {
//   const location = useLocation();

//   const { resData } = location.state || {};
//   const resultData = resData.resData;
//   const searchQuiz = resData.quiz

//   return (
//     <div className="chat-with-community">
//       <div className="overlap-wrapper">
//       <div className="text-wrapper-8"> 
//         <img className="Logo" alt="Logo" src={icon} height='100px' margin= '0' left= '0'/>
//         <div className="translate">
//         <button className="button-20">
//           <div className="text-wrapper-20">Swahili</div>
//         </button> 
//         <button className="button-21">
//           <div className="text-wrapper-20">Somali</div>
//         </button>
//       </div>
//       </div>
      

//         <div className="overlap">
//           <div className="overlap-group">
//             <div className="right-nav">
//               <img className="line" alt="Line" src="/img/line-2.svg" />
//               <div className="group">
              
//                 <div className="div-wrapper">
//                   <div className="text-wrapper">More related questions</div>
//                 </div>
//               </div>
             
//               <div className="group-2">
//                 <p className="text-wrapper-3">What are the prevention and control of cholera?</p>
//               </div>
//               <div className="group-3">
//                 <div className="text-wrapper-3">How can cholera spread?</div>
//               </div>
//               <div className="group-4">
//                 <p className="text-wrapper-3">What is the best treatment for cholera?</p>
//               </div>
//               <div className="text-wrapper-4">See the full list</div>
//               <div className="text-wrapper-5">Recommended Topic</div>
//               <div className="frame" data-position="1">
//                 <div className="text-wrapper-6">Technology</div>
//               </div>
//               <div className="frame" data-position="2">
//                 <div className="text-wrapper-6">Money</div>
//               </div>
//               <div className="frame" data-position="3">
//                 <div className="text-wrapper-6">Business</div>
//               </div>
//               <div className="frame" data-position="4">
//                 <div className="text-wrapper-6">Productivity</div>
//               </div>
//               <div className="frame" data-position="5">
//                 <div className="text-wrapper-6">Yada Yada</div>
//               </div>
//               <div className="frame" data-position="6">
//                 <div className="text-wrapper-6">Art</div>
//               </div>
//               <div className="frame" data-position="7">
//                 <div className="text-wrapper-6">Mindfulness</div>
//               </div>

//             </div>
           
            
//           </div>

//           <div className="search-results">
//             <header className="header">
//               <div className="text-wrapper-7"> {searchQuiz}</div>
//             </header>

          //   {Array.isArray(resultData) && resultData.length > 0 ? (
          //     <>
          //       <div className="blog">
          //         <div className="overlap-2">
          //           <div className="text-wrapper-8">·</div>
          //           <div className="frame-8">
          //             <div className="text-wrapper-9">verified answer</div>
          //           </div>
          //         </div>
          //         {resultData.map((item, index) => (
          //           <>
          //             <div className="text-wrapper-10">{item.subtopic_name}</div>
          //             <p className="p">
          //               {item.content}
          //             </p>
          //           </>
          //         ))}
                  
          //       </div>

          //       <div className="blog-2">
          //         <div className="text-wrapper-12">·</div>
          //         <div className="text-wrapper-13">Prevention of Cholera</div>
          //         <p className="text-wrapper-14">
          //           Ensure access to safe water and proper sanitation practices to prevent the spread of cholera.
          //         </p>
          //         <div className="text-wrapper-15">·</div>
          //         <div className="frame-9">
          //           <div className="text-wrapper-9">Copilot Master</div>
          //         </div>
                  
          //       </div>
          //     </>
          //   ) : (
          //     <p>No search term provided.</p>
          //   )}
          // </div>

//           <div className="overlap-group-wrapper1">
//                 <div className="div">
//                   <div className="text-wrapper-2">Search</div>
//                 </div>
//               </div>

//         </div> 
        
//       </div>
//     </div>
//   );
// };
// export default Community;



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
  const { resData } = location.state || {};
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
            <Searchpage quiz={searchTerm} ans={resultData}/>
            <Searchpage quiz={searchTerm} ans={resData}/>
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
