import React from "react";


const End = () => {
  return (
    <div className="container py-5">
      {/* Hero Text */}
      <h1 className="fw-bold">
        Your <span className="text-hobby">Hobby</span>, Your{" "}
        <span className="text-community">Community...</span>
      </h1>

      {/* Button */}
      <button className="btn btn-started mt-3">Get started</button>

      {/* Image Section */}
      <div className="mt-5">
        <img
          src="https://res.cloudinary.com/duwddcqzi/image/upload/v1738946849/Group_99_dzyawj.png" // Replace with your image path
          alt="Community Activities"
          className="img-fluid"
        />
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .text-hobby {
            color: #9368b7;
            font-style: italic;
          }
          .text-community {
            color: #229bd8;
            font-style: italic;
          }
          .btn-started {
            background-color: #9368b7;
            color: white;
            border-radius: 6px;
            font-weight: bold;
            padding: 10px 20px;
            border: none;
          }
          .btn-started:hover {
            background-color: #7d56a1;
          }
        `}
      </style>
    </div>
  );
};

export default End;
