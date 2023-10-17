
import React, { useEffect } from 'react';
import logo from "../../assets/images/dental-logo.png";
import "../../assets/css/Nav.css";

export const Nav = () => {
    useEffect(() => {
        const output = document.querySelector('.nav');
        const nav_list = document.querySelector('.nav-list');
    
        window.addEventListener('scroll', () => {
          if (window.scrollY >= 60) {
            output.style.background = '#a7a8a9';
            nav_list.style.color = '#fff';
          } else {
            output.style.background = 'transparent';
            nav_list.style.color = '#fff';
          }
        });
      }, []);

  return (
    <section>
      <nav className="nav flex align-center justify-between">
        <div className='flex align-center'>
          <div className="nav-logo mr-10">
            <img src={logo} alt="logo" />
          </div>
          <div className='logo'>
            <div>Smile Face</div>
            <div> Dental Clinic</div>
          </div>
        </div>
        <div className="nav-list flex">
          <div className="mr-30 menu">HOME</div>
          <div className="mr-30 menu">PAGES</div>
          <div className="mr-30 menu">ABOUT</div>
          <div className="mr-30 menu">SERVICE</div>
          <div className="mr-30 menu">PRICING</div>
          <div className="mr-30 menu">CONTACT</div>
        </div>
        <div className="nav-btn">MAKE APPOINTMENT</div>
      </nav>
    </section>
  );
};
