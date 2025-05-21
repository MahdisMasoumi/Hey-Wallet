import React, { useState, useEffect } from "react";
import "./Header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header-inner ${scrolled ? "scrolled" : ""}`}>
      <div className="container-xl header-width d-flex justify-content-between align-items-center">
        {/* Logo Section */}
        <div
          className="logo-container"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <svg
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            aria-label="Hey Wallet Logo"
          >
            <symbol id="leaf" viewBox="-0.1 -0.1 3.2 3.2">
              <path
                strokeWidth="0.2"
                d="m0,0 h1 a2,2 0,0,1 2,2 v1 h-1 a2,2 0,0,1 -2,-2z"
              />
            </symbol>

            {/* Left leaf */}
            <use
              href="#leaf"
              x="70"
              y="25"
              width="12"
              height="12"
              fill={logoHovered ? "#74be9e" : "#040200"}
              style={{ transition: "all 0.5s ease-out" }}
            />

            {/* Right mirrored leaf */}
            <g transform="translate(140, 0) scale(-1, 1)">
              <use
                href="#leaf"
                x="39"
                y="19"
                width="14"
                height="14"
                fill={logoHovered ? "#74be9e" : "#040200"}
                style={{ transition: "all 0.5s ease-out" }}
              />
            </g>

            {/* Logo Text */}
            <text
              x="0"
              y="46"
              fontWeight="700"
              fontSize="34"
              fontFamily="system-ui"
              fill={logoHovered ? "#182922" : "#060a08"}
            >
              HEY
            </text>
            <text
              x="0"
              y="76"
              fontWeight="700"
              fontSize="34"
              fontFamily="system-ui"
              fill={logoHovered ? "#182922" : "#060a08"}
            >
              WALLET
            </text>

            {/* Soil Mound */}
            <path
              d="M70,45 Q85,45 100,45 Q85,35 70,45"
              fill={logoHovered ? "#040200" : "#040200"}
              style={{ transition: "all 0.2s ease-out" }}
            />

            {/* Stem */}
            <line
              x1="85"
              y1="40"
              x2="85"
              y2="30"
              stroke={logoHovered ? "#854000" : "#040200"}
              strokeWidth="3"
              style={{ transition: "all 0.2s ease-out" }}
            />
          </svg>
        </div>

        {/* Menu Section */}
        <div
          className="menu-container"
          onClick={() => setOpen(!open)}
          onMouseEnter={() => setMenuHovered(true)}
          onMouseLeave={() => setMenuHovered(false)}
        >
          <div className={`menu-button ${menuHovered ? "hovered" : ""}`}>
            <span className="menu-text">Menu</span>
            <div className="wave-container">
              <svg
                className="wave-svg"
                viewBox="0 0 72 26"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="wave"
                  d="M0,6 C3,0 9,12 12,6 C15,0 21,12 24,6 C27,0 33,12 36,6 C39,0 45,12 48,6 C51,0 57,12 60,6 C63,0 69,12 72,6"
                  fill="none"
                  stroke="#555"
                  strokeWidth="2"
                />
                <path
                  className="wave"
                  d="M0,20 C3,14 9,26 12,20 C15,14 21,26 24,20 C27,14 33,26 36,20 C39,14 45,26 48,20 C51,14 57,26 60,20 C63,14 69,26 72,20"
                  fill="none"
                  stroke="#555"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
