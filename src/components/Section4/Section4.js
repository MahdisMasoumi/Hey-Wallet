import React from "react";
import "./Section4.css";

const Section4 = () => {
  const testimonialsData = [
    {
      id: 1,
      text: "“Accusantium quas quisquam non quas numquam corporis et asperiores.”",
      imgSrc: "img/user1.png",
      imgAlt: "Portrait",
      name: "— Liam Lynn",
    },
    {
      id: 2,
      text: "“Quisquam itaque deserunt ullam, quia ea repellendus provident.”",
      imgSrc: "img/user2.png",
      imgAlt: "Portrait",
      name: "— Sara Miles",
    },
    {
      id: 3,
      text: "“Debitis, nihil sit minus suscipit magni aperiam vel tenetur.”",
      imgSrc: "img/user3.png",
      imgAlt: "Portrait",
      name: "— Nick Gomes",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="mb-1">
          <h1 className="section__header ">
            Trusted by thousands of businesses across the Canada
          </h1>
        </div>

        <div
          id="testimonialCarousel"
          className="carousel slide slider"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner container">
            {testimonialsData.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <div className="testimonial row flex-column flex-sm-row align-items-center text-center text-md-start">
                  <div className="col-12 col-sm-3 col-md-3 mb-4 mb-md-0">
                    <img
                      src={testimonial.imgSrc}
                      alt={testimonial.imgAlt}
                      className="testimonial__photo"
                    />
                  </div>
                  <div className="col-12 col-sm-9 col-md-9 ">
                    <blockquote className="fs-5 fst-italic testimonial-text">
                      {testimonial.text}
                    </blockquote>
                    <h6 className=" fw-bold mt-3 testimonial-name">
                      {testimonial.name}
                    </h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="slider__btn slider__btn--left"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-label="Previous Slide"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="slider__btn slider__btn--right"
            type="button"
            data-bs-target="#testimonialCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-label="Next Slide"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section4;
