import React, { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import { secret_key, API_URL } from '../../General';
import CryptoJS from 'crypto-js';
import { useNavigate } from 'react-router-dom';

Modal.setAppElement('#root');

const customStylesforReset = {
  content: {
    top: '30%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    marginTop: '40px'
  },
};

function Menubar() {
  let navigate = useNavigate();

  const logout = () =>{
    localStorage.clear();
    navigate(0);
  }

  const [editmodalIsOpen, setEditIsOpen] = useState(false);
  
  const storedData = localStorage.getItem('user');
  if (storedData) {
    var bytes = CryptoJS.AES.decrypt(storedData, secret_key);
    var userData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
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

  const [editpassword, seteditpassword] = useState({
    email: userData?.email,
    password: ""
  })


  const openEditModal = () => {
    setEditIsOpen(true);
  }

  const closeEditModal = () => {
    setEditIsOpen(false);
  }

  const handleeditChange = (e) => {
    const editdata = { ...editpassword }
    editdata[e.target.id] = e.target.value
    seteditpassword(editdata)
  }

  const editPassword = (ev) => {
    ev.preventDefault() 
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `${API_URL}/reset_password`,
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': _token
      },
      data : editpassword
    };
    
    axios.request(config)
    .then((response) => {
      
    })
    .catch((error) => {
    
    });
  }
  
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light fixed-top">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li> 
  </ul>



      <Modal
          isOpen={editmodalIsOpen}
          onRequestClose={closeEditModal}
          style={customStylesforReset}
          contentLabel="Example Modal"
        >
          <div className="containernewcompany">
            <div className="title">
              Change Password
              <i onClick={closeEditModal} className="fa fa-window-close red-close-icon" aria-hidden="true"></i>
            </div> 
            <div className="content">
              <form onSubmit={editPassword}> 
                <div className="user-details">
                
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input type="text" 
                      readOnly
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                      value={editpassword?.email}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input type="password"
                      placeholder="Enter password" 
                      required 
                      onChange={handleeditChange}
                      id='password'
                    />
                  </div>
                </div>
               
                <div className="button">
                  <input type="submit" defaultValue="Update" />
                </div>
              </form>
            </div>
          </div>

        </Modal>

<div className="dropdown" id="thecareticon1">
  <>{ userData?.name }</>
  <button className="btn btn-default dropdown-toggle" data-toggle="dropdown">
    <span className="caret" />
  </button>
  <ul className="dropdown-menu dropdown-menu-right companyActions">
    <li onClick={openEditModal}><i className="fa fa-key"></i>Reset password</li>
    <li onClick={logout}><i className="fa fa-sign-out"></i>Logout</li>
  </ul>
</div>






</nav>

  )
}

export default Menubar