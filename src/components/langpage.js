// import React, { useEffect, useState } from "react";
// import { API_URL, secret_key, LANGUAGES, saveLogs } from "../General";
// import { useTranslation } from "react-i18next";
// import CryptoJS from "crypto-js";
// import axios from "axios";

// const Langpage = () => {
//   const { i18n } = useTranslation();
//   const [activeLanguage, setActiveLanguage] = useState(
//     localStorage.getItem("selectedLanguage") || "en"
//   );
//   const [details, setDetails] = useState("");
//   const [logeduserData, setLogeduserData] = useState(null);

//   useEffect(() => {
//     try {
//       const storedData = localStorage.getItem("user");
//       if (storedData) {
//         const bytes = CryptoJS.AES.decrypt(storedData, secret_key);
//         const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
//         setLogeduserData(decryptedData);
//       }
//     } catch (error) {
//       console.error("Error decrypting user data:", error);
//     }
//   }, []);

//   // useEffect(() => {
//   //   if (logeduserData?.Customer_no) {
//   //     const getCustomerDetails = async () => {
//   //       try {
//   //         const response = await axios.post(`${API_URL}/get_customer_details`, {
//   //           custno: logeduserData.Customer_no,
//   //         });
//   //         setDetails(response.data);
//   //       } catch (error) {
//   //         console.error("Error fetching customer details:", error);
//   //       }
//   //     };

//   //     getCustomerDetails();
//   //   }
//   // }, [logeduserData?.Customer_no]);

//   useEffect(() => {
//     const langFromStorage = localStorage.getItem("selectedLanguage");
//     if (langFromStorage && langFromStorage !== activeLanguage) {
//       setActiveLanguage(langFromStorage);
//       i18n.changeLanguage(langFromStorage);
//     }
//   }, [i18n, activeLanguage]);

//   const onChangeLang = (code) => {
//     setActiveLanguage(code);
//     localStorage.setItem("selectedLanguage", code);
//     i18n.changeLanguage(code);

//     // if (logeduserData?.Customer_no) {
//     //   saveLogs(
//     //     logeduserData.Customer_no,
//     //     logeduserData.phone,
//     //     code,
//     //     details?.email_address
//     //   );
//     // }
//   };

//   return (
//     <div className="langselect">
//       <div className="flex-container">
//         {LANGUAGES.map(({ code, label }) => (
//           <button
//             key={code}
//             onClick={() => onChangeLang(code)}
//             className={activeLanguage === code ? "active" : ""}
//           >
//             {label}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Langpage;
