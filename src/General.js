import axios from 'axios';
import CryptoJS from 'crypto-js';

export const API_URL = 'https://learninghub.mawingu.co/api';
// export const API_URL = 'http://192.168.100.58:3004/auth';

export const secret_key = "mawingu@2023secret"
export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();

  const formattedDate = `${day}/${month}/${year}`;
  
    return formattedDate;
}

export function shortenDate(inputDate) {
  const date = new Date(inputDate);
  const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

const encryptedToken = localStorage.getItem('token');
    let decryptedToken = '';

    if (encryptedToken) {
      try {
        const decryptedBytes = CryptoJS.AES.decrypt(encryptedToken, secret_key);
        decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
      } catch (error) {
        console.log('Error.');
      }
    }

    const _token = `Bearer ${decryptedToken}`;

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    marginTop: '0px',
    maxHeight: '650px',
    overflow: 'auto'
  },
};

// interview mail for all fail, shortlist, and hired
export function interviewFinalOfferMail(email, subject, message, attachment, personalDetails){
  let maildata = {
    "email": email,
    "subject": subject,
    "message": message,
    "attachment": attachment,
    "personalDetails": personalDetails
  };

  let config = {
    method: 'post',
    url: `${API_URL}/send_offer_email`,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': _token
    },
    data : maildata
  };

  axios.request(config)
  .then((response) => {
    // console.log(maildata)
    // console.log(response)
  })
  .catch((error) => {
    console.log(error)
  });
}

export function interviewMail(email, subject, message, attachment){
  let maildata = {
    "email": email,
    "subject": subject,
    "message": message,
    "attachment": attachment
  };

  let config = {
    method: 'post',
    url: `${API_URL}/send_email`,
    headers: { 
      'Content-Type': 'application/json',
      'Authorization': _token
    },
    data : maildata
  };

  axios.request(config)
  .then((response) => {
  })
  .catch((error) => {
    console.log(error)
  });
}

export const hr_email = "pride.lesaigor@mawingu.co"
export const it_email = "pride.lesaigor@mawingu.co"
export const operations_email = "pride.lesaigor@mawingu.co"