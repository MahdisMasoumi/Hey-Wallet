import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Section3.css";

const cardVideos = ["/img/vid1.mp4", "/img/vid2.mp4", "/img/vid3.mp4"];

const Section3 = () => {
  const [step, setStep] = useState(0);
  const [phase, setPhase] = useState("showing");

  useEffect(() => {
    if (phase === "showing" && step < cardVideos.length) {
      const timer = setTimeout(() => setStep(step + 1), 3000);
      return () => clearTimeout(timer);
    }

    if (step === cardVideos.length && phase === "showing") {
      setTimeout(() => setPhase("black-center"), 500);
    }

    if (phase === "black-center") {
      setTimeout(() => {
        setStep(0);
        setPhase("showing");
      }, 1500);
    }
  }, [step, phase]);

  return (
    <div
      className="container-fluid d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <div className="card-section position-relative">
        {/* Black card */}
        <motion.div
          className="black-card-stack"
          animate={
            phase === "black-center"
              ? { x: 0 }
              : phase === "returning"
              ? { x: -400 }
              : {}
          }
          transition={{ duration: 1 }}
        >
          <div className="black-card-content text-center">
            <img
              src="/img/white-logo.png"
              alt="Logo"
              className="black-card-image mx-auto"
            />
            <h2 className="black-card-heading">All in single platform</h2>
          </div>
        </motion.div>

        {/* Animated cards */}
        {cardVideos.map((src, i) => {
          if (i > step) return null;

          const isReturning = phase === "black-center";

          return (
            <motion.video
              key={`card-${i}`}
              className="card"
              src={src}
              autoPlay
              muted
              loop
              playsInline
              initial={{ x: -250, opacity: 0, scale: 0.2 }}
              animate={
                isReturning
                  ? { x: -300, opacity: 0, scale: 0.5 }
                  : i === step
                  ? { x: 120, opacity: 1, scale: 1, zIndex: 10 }
                  : { x: 110, opacity: 0.3, scale: 0.9, zIndex: 1 }
              }
              transition={{ duration: 0.8 }}
              style={{ position: "absolute" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Section3;
