import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <p className="footer-text">
          ¹ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          quis ante erat. Praesent nisl augue, vestibulum in dolor id, tempor
          volutpat nisl. Curabitur id malesuada nibh.
        </p>
        <p className="footer-text">
          ² Sed hendrerit ligula vel euismod feugiat. Ut vel purus dui. Sed at
          augue finibus, porttitor ante eget, consectetur sapien. Vivamus mollis
          nec diam vitae venenatis. Etiam facilisis at arcu hendrerit euismod.
          Integer porttitor convallis ipsum, quis pharetra tellus. Pellentesque
          placerat turpis eget nisl luctus efficitur.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
