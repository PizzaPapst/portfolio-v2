import React, { useState, useEffect } from "react";
import '../styles/backtotopButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackToTop = () => {
  // Zustand zum Verwalten der Sichtbarkeit des Buttons
  const [isVisible, setIsVisible] = useState(false);

  // Funktion zum Überwachen der Scrollposition
  const toggleVisibility = () => {
    if (window.scrollY >= 360) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Funktion zum Scrollen nach oben
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Smooth scroll animation
    });
  };

  // Scroll-Event hinzufügen
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup des Event Listeners
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="backtotop-btn"
        >
          <FontAwesomeIcon icon="fa-solid fa-arrow-up"></FontAwesomeIcon>
          To Top
        </button>
      )}
    </>
  );
};

export default BackToTop;
