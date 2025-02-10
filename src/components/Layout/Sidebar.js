import React from 'react';
import Menubar from './Menubar';
import Footer from './Footer';
import { useState, useEffect } from "react";
import { Routes, Route, NavLink, Navigate, useNavigate } from "react-router-dom";
import Home from '../Home';
import white_logo from '../assets/Mawingu_white_logo.png'

function Sidebar() {
  const isAuthenticated = 1
  const userData = {
    role_id: 1
  }
  return (
    <div>
      <div className='sideBarMain'>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <div className="sidebar">
            {/* Sidebar user panel (optional) */}
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img src={white_logo} className='logoImage' alt="logo" />
              </div>
            </div>
            {/* Sidebar Menu */}
            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                {/* Add icons to the links using the .nav-icon class
                 with font-awesome or any other icon font library */}
                  {userData?.role_id === 1 ?
                    (<li className="nav-item">
                      <NavLink to="/" className="nav-link" activeclassname="active">
                        <i className="fa fa-envelope-open-o mysidebaricons" aria-hidden="true "></i>
                        <p>Jobs </p>
                      </NavLink>
                    </li>
                    ) : 
                    ("")
                  }

              </ul>
            </nav>
          </div>
        </aside>
      </div>

      <Menubar />
      <div className='wrapper mainBody'>
        <div className="content-wrapper">
          <Routes>
            <Route exact path="" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Sidebar;
