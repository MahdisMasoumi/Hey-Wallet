import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Section5.css";

const Section5 = () => {
  return (
    <section id="section5" className="section5-container">
      <div className="container text-center py-5">
        <h2 className="section5-heading">
          Empowering Every Transaction, Everywhere
        </h2>

        <div
          id="section5Carousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {["video1", "video2", "video3", "video4"].map((vid, i) => (
              <div
                key={i}
                className={`carousel-item ${i === 0 ? "active" : ""}`}
                data-bs-interval="4000"
              >
                <video
                  className="d-block w-100 section5-video"
                  autoPlay
                  loop
                  muted
                  playsInline
                  aria-hidden="true"
                  aria-label={`Video ${i + 1}`}
                >
                  <source src={`/img/${vid}.mp4`} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="carousel-indicators mt-3">
            {[0, 1, 2, 3].map(index => (
              <button
                key={index}
                type="button"
                data-bs-target="#section5Carousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
