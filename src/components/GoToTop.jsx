import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="position-fixed bottom-0 end-0 p-3">
      {isVisible && (
        <button
          className="btn btn-light shadow rounded-circle d-flex align-items-center justify-content-center go-top-btn"
          onClick={scrollToTop}
        >
          <FaArrowUp className="text-secondary fs-4" />
        </button>
      )}
      <style>
        {`
            .go-top-btn {
                width: 50px;
                height: 50px;
                transition: all 0.3s ease-in-out;
              }
              
              .go-top-btn:hover {
                background-color: #9368b7;
                color: white;
              }
              
        `}
      </style>
    </div>

  );
};

export default GoToTop;
