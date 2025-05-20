import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Section2.css";
const words = ["money", "business", "finance", "expenses"];

const Section2 = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="rotating-text-container">
      <span className="static-part">We help you manage your &nbsp;</span>
      <div className="word-wrapper">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="rotating-word"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Section2;
