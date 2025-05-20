import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Section2 from "./components/Section2/Section2";
import Section3 from "./components/Section3/Section3";
import Section4 from "./components/Section4/Section4";
import Footer from "./components/Footer/Footer";
import Section5 from "./components/Section5/Section5";
import Section6 from "./components/Section6/Section6";

function App() {
  return (
    <div className="about-page">
      <Header />
      <Home />
      <Section3 />
      <Section2 />
      <Section5 />
      <Section6 />
      <Section4 />
      <Footer />
    </div>
  );
}

export default App;
