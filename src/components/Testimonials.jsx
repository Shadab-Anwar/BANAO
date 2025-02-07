import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button, ProgressBar } from "react-bootstrap";
import { FaQuoteLeft, FaPlay } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <div className="container py-5">
      <Card className="border-0 shadow-sm rounded-3 p-4" style={{ backgroundColor: "#F8F6FC" }}>
        <Card.Body>
          {/* Header Section */}
          <div className="d-flex align-items-center mb-3">
            <div className="d-flex align-items-center justify-content-center rounded-circle" 
              style={{ backgroundColor: "#9E8BCE", width: "40px", height: "40px" }}>
              <FaQuoteLeft className="text-white fs-5" />
            </div>
            <h5 className="fw-bold ms-2">Testimonials</h5>
          </div>

          {/* Testimonial Text */}
          <p className="text-muted">
            In a fast-growing and ever-changing city like Bangalore, it sometimes becomes very difficult to find or 
            connect with like-minded people. Websites like hobbycue.com help me get in touch with, communicate, connect, 
            and exchange ideas with other dancers. It also provides the extra benefit of finding products and services 
            that I can avail, which I can be assured is going to be of great quality as it comes recommended by people 
            of the HobbyCue community.
          </p>

          {/* Audio Player UI */}
          <div className="d-flex align-items-center p-3 rounded" style={{ backgroundColor: "#D0C2EA" }}>
            <Button variant="light" className="rounded-circle p-2 d-flex align-items-center justify-content-center"
              style={{ backgroundColor: "#9E8BCE", width: "40px", height: "40px" }}>
              <FaPlay className="text-white" />
            </Button>
    
            <div className="mx-3 flex-grow-1">
              <ProgressBar now={0} style={{ height: "5px", backgroundColor: "#fff" }} variant="purple" />
            </div>
            <span className="text-muted"></span>
            
        

          {/* Profile Section */}
          <div className="d-flex align-items-center">
            <img 
              src="https://res.cloudinary.com/duwddcqzi/image/upload/v1738942335/Ellipse_12_zzetpv.png" 
              alt="User" 
              className="rounded-circle me-3" 
              width="50" height="50"
            />
            <div>
              <h6 className="fw-bold text-dark m-0">Shubha Nagarajan</h6>
              <p className="text-primary m-0">Classical Dancer</p>
            </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TestimonialCard;
