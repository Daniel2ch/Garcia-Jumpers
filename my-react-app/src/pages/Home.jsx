import React, { useState } from 'react';
import { contactInfo, uiTranslations } from '../productsData.js';
import './Home.css';
const Home = ({ language }) => {
  const t = uiTranslations[language];

  return (
    <div className="home-container">
      <header className="homeHeader">
        <div className="hero-overlay">
          <h1>{t.welcome_title}</h1>
          <div className="quick-contact-banner">
            <span>📞 Call: <strong>{contactInfo.phone}</strong></span>
            <span className="separator">|</span>
            <span>✉️ Email: <strong>{contactInfo.email}</strong></span>
          </div>
        </div>
      </header>
      <div className="section">
        <h2 className="welcomeDesc">{t.welcome_desc}</h2>
      </div>
      <div className="trioTitle">
        <h3>{t.jumpers_title}</h3>
        <h3>{t.tentsChairsTables}</h3>
        <h3>{t.decorations}</h3>
      </div>
      <div className="trioImagesContainer">
        <div className="trioImg1">
          <img src="../images/redWaterJumper1.jpeg" alt="redWaterJumper1" />
        </div>
        <div className="trioImg2">
          <img src="../images/tent8.jpeg" alt="tent9" />
        </div>
        <div className="trioImg3">
          <img src="../images/decorations4.jpeg" alt="decorations4" />
        </div>
      </div>
      <div className="firstSectionContainer">
        <div className="firstSectionLeft">
          <h2>Multiple Jumpers!</h2>
          <p>Check out our selection of jumpers and find the perfect one for your party! We have a total of four different jumpers to choose from. All come in different sizes for all age groups!</p>
          <button className="viewMoreBtn">See More</button>
        </div>
        <div className="firstSectionRight">
          <img className="firstSectionRightImage" src="../images/blueJumper1.jpeg" alt="birthdayPackages" />
        </div>
      </div>
      <div className="firstSectionContainer">
        <div className="firstSectionLeft">
          <img className="firstSectionRightImage" src="../images/blueJumper1.jpeg" alt="birthdayPackages" />
        </div>
        <div className="firstSectionRight">
          <h2>Multiple Jumpers!</h2>
          <p>Check out our selection of jumpers and find the perfect one for your party! We have a total of four different jumpers to choose from. All come in different sizes for all age groups!</p>
          <button className="viewMoreBtn">See More</button>        </div>
      </div>
      <div className="firstSectionContainer">
        <div className="firstSectionLeft">
          <h2>Multiple Jumpers!</h2>
          <p>Check out our selection of jumpers and find the perfect one for your party! We have a total of four different jumpers to choose from. All come in different sizes for all age groups!</p>
          <button className="viewMoreBtn">See More</button>
        </div>
        <div className="firstSectionRight">
          <img className="firstSectionRightImage" src="../images/blueJumper1.jpeg" alt="birthdayPackages" />
        </div>
      </div>
    </div>
  )
}

export default Home;