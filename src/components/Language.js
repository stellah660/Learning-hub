import React, { useEffect, useState } from 'react';
import { API_URL, secret_key, LANGUAGES, saveLogs } from '../General';
import { useTranslation } from 'react-i18next';
import CryptoJS from 'crypto-js';
import axios from 'axios';

const Langpage = () => {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState(
    localStorage.getItem('selectedLanguage') || 'en'
  );

  const storedData = localStorage?.getItem('user');
  if (storedData) {
    var bytes = CryptoJS.AES.decrypt(storedData, secret_key);
    var logeduserData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  }

//   const [details, setDetails]=useState("");
//   const custno = logeduserData?.Customer_no

//   const getCustomerDetails =() =>{
//       let config = {
//         method: 'post',
//         maxBodyLength: Infinity, 
//         url: ${API_URL}/get_customer_details,
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//           data : {
//             "custno": custno
//           }
//       };
      
//       axios.request(config)
//       .then((response) => {
//         setDetails(response.data)
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     }
  
//   useEffect(() => {
//     getCustomerDetails();
//   }, [custno])

  useEffect(() => {
    const langFromStorage = localStorage.getItem('selectedLanguage');
    if (langFromStorage) {
      setActiveLanguage(langFromStorage);
      i18n.changeLanguage(langFromStorage);
    }
  }, [i18n]);

  const onChangeLang = (code) => {
    setActiveLanguage(code);
    localStorage.setItem('selectedLanguage', code);
    i18n.changeLanguage(code);
  };

  return (
    <div className='langselect'>
      <div className='flex-container'>
        {LANGUAGES.map(({ code, label }) => (
          <button
            key={code}
            onClick={() => {
              onChangeLang(code);

            //   if(logeduserData?.Customer_no){
            //     saveLogs(logeduserData.Customer_no, logeduserData.phone,label, details?.email_address);
            //   }
            }}
            className={activeLanguage === code ? 'active' : ''}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Langpage;