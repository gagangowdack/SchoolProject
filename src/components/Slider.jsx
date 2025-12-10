import { useState, useEffect } from "react";
import "../App.css";
import "./Slider.css";

import img1 from "../assets/schoolimg.jpg";
import img2 from "../assets/school-building-uk-infant-junior-5-11years.webp";
import img3 from "../assets/school-bus-in-front-of-a-school.webp";

const images = [img1, img2, img3];

const messages = [
  "Be curious — ask questions and explore.",
  "Be kind — help classmates and teachers.",
  "Work hard — small steps build big progress.",
  "Respect others — listening is learning.",
  "Be brave — try new things and learn from mistakes.",
];

const Slider = () => {
  const [index, setIndex] = useState(0);
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMsgIndex((m) => (m + 1) % messages.length);
    }, 3500);
    return () => clearInterval(msgTimer);
  }, []);

  return (
    <div className="slider" role="region" aria-label="Homepage image slider">
      <img src={images[index]} alt={`school banner ${index + 1}`} className="slider-image" />

      <div className="slider-overlay">
        <div className="slider-message" aria-live="polite">
          {messages[msgIndex]}
        </div>
      </div>
    </div>
  );
};

export default Slider;
