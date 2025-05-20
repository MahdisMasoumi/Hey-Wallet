import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <video className="background-video" autoPlay muted loop playsInline>
        <source src="/img/banner1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container py-5">
        <div className="content-card">
          <h1 className="display-4 fw-bold mb-3">Banking Reimagined</h1>
          <p className="lead mb-5">Smart. Secure. Simple.</p>
          <p className="info-text mb-5">
            Welcome to the future of banking. Our innovative solutions provide
            you with seamless financial management, enhanced security features,
            and 24/7 access to your accounts from anywhere in the world.
          </p>

          <a href="#accounts" className="btn btn-lg mt-3">
            Explore Accounts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
