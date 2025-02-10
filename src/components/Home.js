// import React, { useState, useEffect } from "react";
// import '../styles/main.css';
// import { useNavigate } from "react-router-dom";
// import logo from '../assets/image.png'
// import icon from '../assets/logo.png'
// import Footer from "./Layout/Footer";
// import Mainmenu from "./Mainmenu";
// import SignInForm from "./SignIn";
// import { useTranslation } from 'react-i18next';
// import {langpage} from "./langpage";


// const Home = () => {
//   // State to handle modals
//   const [showLoginModal, setShowLoginModal] = useState(false);
//   const [showRegisterModal, setShowRegisterModal] = useState(false);

//   // Functions to open and close modals
//   const openLoginModal = () => setShowLoginModal(true);
//   const closeLoginModal = () => setShowLoginModal(false);
//   const openRegisterModal = () => setShowRegisterModal(true);
//   const closeRegisterModal = () => setShowRegisterModal(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
//   const [changeLanguage, setChangeLanguage] = useState(false);
//   console.log(showLoginModal);
  

//   const handleGoogleSignIn = () => {
 
//     console.log("Google Sign-In clicked");
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };
  
//   const { t } = useTranslation();

  

//   // const handleSearch = () => {
//   //   console.log("Search term:", searchTerm);
//   //   Navigate(`/community?search=${encodeURIComponent(searchTerm)}`);
//   // };
//   const styles = {
//     container: {
//       maxWidth: "300px",
//       width: "80%",
//       margin: "0 auto",
//       padding: "20px 30px",
//       backgroundColor: "#fff",
//       borderRadius: "8px",
//       boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//       textAlign: "center",
//       fontFamily: "Arial, sans-serif",
//       float: "right",
//     },
//     formGroup: {
//       marginBottom: "15px",
//       textAlign: "left",
//     },
//     label: {
//       display: "block",
//       marginBottom: "5px",
//       fontSize: "14px",
//     },
//     input: {
//       width: "100%",
//       padding: "10px",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       fontSize: "14px",
//     },
//     checkboxGroup: {
//       display: "flex",
//       alignItems: "center",
//       marginBottom: "20px",
//     },
//     checkbox: {
//       marginRight: "5px",
//     },
//     checkboxLabel: {
//       fontSize: "14px",
//     },
//     button: {
//       width: "100%",
//       padding: "10px",
//       backgroundColor: "#007bff",
//       color: "#fff",
//       border: "none",
//       borderRadius: "4px",
//       fontSize: "14px",
//       fontWeight: "bold",
//       cursor: "pointer",
//     },
//     buttonHover: {
//       backgroundColor: "#0056b3",
//     },
//     divider: {
//       margin: "20px 0",
//       display: "flex",
//       alignItems: "center",
//       textAlign: "center",
//       position: "relative",
//       fontSize: "14px",
//       color: "#666",
//     },
//     googleButton: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       padding: "10px",
//       border: "1px solid #ccc",
//       borderRadius: "4px",
//       cursor: "pointer",
//       backgroundColor: "#fff",
//     },
//     googleLogo: {
//       height: "16px",
//       marginRight: "10px",
//     },
//     footer: {
//       marginTop: "20px",
//       fontSize: "12px",
//     },
//     link: {
//       color: "#007bff",
//       textDecoration: "none",
//     },
//   };

//   const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [keepLoggedIn, setKeepLoggedIn] = useState(false);
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       console.log("Email:", email);
//       console.log("Password:", password);
//       console.log("Keep Logged In:", keepLoggedIn);
//     };
//   const { i18n } = useTranslation();
//   const [activeLanguage, setActiveLanguage] = useState(
//     localStorage.getItem('selectedLanguage') || 'en'
//   );

//   useEffect(() => {
//     const langFromStorage = localStorage.getItem('selectedLanguage');
//     if (langFromStorage) {
//       setActiveLanguage(langFromStorage);
//       i18n.changeLanguage(langFromStorage);
//     }
//   }, [i18n]);

//   const onChangeLang = (code) => {
//     setActiveLanguage(code);
//     localStorage.setItem('selectedLanguage', code);
//     i18n.changeLanguage(code);
//   };


    
//     const Langpage = () => {
//   const { i18n } = useTranslation();
//   const [activeLanguage, setActiveLanguage] = useState(
//     localStorage.getItem('selectedLanguage') || 'en'
//   );
// };





//   return (
//     <div className="landing-page">
//         <div className="top-nav">
//             <div className="text-wrapper-8">
//               <img className="Logo" alt="Logo" src={icon} height="80px" />
//             </div>
//            <div className="text-wrapper-7">Elimika na Mawingu</div> 
 
//             <div className='registerbtn'>
//               <div className="button-container">
//               <button className="auth-button" onClick={() => changeLanguage('en')}>
//                 Swahili
//               </button>
//               <button className="auth-button"  onClick={() => changeLanguage('so')}>
//                 Somali
//               </button>
              
//             </div>
//             </div>
            
           
//         </div>
  
//         {showLoginModal && (
//           <div className="modal-overlay1">
//             <div style={styles.container}>
//       <h2>Sign in</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.formGroup}>
//           <label htmlFor="email" style={styles.label}>Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Enter your email"
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.formGroup}>
//           <label htmlFor="password" style={styles.label}>Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Enter your password"
//             style={styles.input}
//             required
//           />
//         </div>
//         <div style={styles.checkboxGroup}>
//           <input
//             type="checkbox"
//             id="keep-logged-in"
//             name="keep-logged-in"
//             checked={keepLoggedIn}
//             onChange={(e) => setKeepLoggedIn(e.target.checked)}
//             style={styles.checkbox}
//           />
//           <label htmlFor="keep-logged-in" style={styles.checkboxLabel}>
//             Keep me logged in
//           </label>
//         </div>
//         {/* <button type="submit" style={styles.button}>Sign in</button> */}
//       </form>
//       {/* <div style={styles.divider}>or</div> */}
//       <div className="modal-buttons">
//                 <button className="button close-button" onClick={closeLoginModal}>
//                   Close
//                 </button>
//                 <button className="button submit-button">Login</button>
//               </div>
//       <div style={styles.footer}>
//         {t('need_an_account')}Need an account? <a href="#" style={styles.link}>Create one</a>
//       </div>
//     </div>
//             {/* <div className="modal123">
//               <h2>Login</h2>
//               <input type="email" placeholder="Email" />
//               <div className="password-input">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   placeholder="Password"
//                 />
//                 <span
//                   className="eye-icon"
//                   onClick={togglePasswordVisibility}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {passwordVisible ? (
//                     <i className="fas fa-eye"></i>
//                   ) : (
//                     <i className="fas fa-eye-slash"></i>
//                   )}
//                 </span>
//               </div>
        
//               <div className="modal-footer">
//               <p className="register-link">
//         Need an account?{" "}
//         <a href="#" onClick={openRegisterModal}>
//           Register here
//         </a>
//       </p>
//               </div>
//               <div className="modal-buttons">
//                 <button className="button close-button" onClick={closeLoginModal}>
//                   Close
//                 </button>
//                 <button className="button submit-button">Login</button>
//               </div>
//             </div> */}
//           </div>
//         )}
  
//         {showRegisterModal && (
//           <div className="modal-overlay1">
//             <div className="modal">
//               <h2>Register</h2>
//               <input type="text" placeholder="Username" />
//               <input type="email" placeholder="Email" />
//               <div className="password-input">
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   placeholder="Password"
//                 />
//                 <span
//                   className="eye-icon"
//                   onClick={togglePasswordVisibility}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {passwordVisible ? (
//                     <i className="fas fa-eye"></i>
//                   ) : (
//                     <i className="fas fa-eye-slash"></i>
//                   )}
//                 </span>
//               </div>
//               <div className="password-input">
//                 <input
//                   type={confirmPasswordVisible ? "text" : "password"}
//                   placeholder="Confirm Password"
//                 />
//                 <span
//                   className="eye-icon"
//                   onClick={toggleConfirmPasswordVisibility}
//                   style={{ cursor: "pointer" }}
//                 >
//                   {confirmPasswordVisible ? (
//                     <i className="fas fa-eye"></i>
//                   ) : (
//                     <i className="fas fa-eye-slash"></i>
//                   )}
//                 </span>
//               </div>
//               <div className="modal-buttons">
//                 <button
//                   className="button close-button"
//                   onClick={closeRegisterModal}
//                 >
//                   Close
//                 </button>
//                 <button className="button submit-button">Register</button>
//               </div>
//             </div>
//           </div>
//         )};   
//         {/* <button className="button-2">
//             <div className="text-wrapper-4">HOW IT WORKS</div>
//         </button> */}
//         <div className="chat">
//           <img className="chatbox" alt="Logo" src={logo} />
//         </div>
                
//       <Mainmenu />
//       <Footer />
//     </div>
//   );
// };

// export default Home;

