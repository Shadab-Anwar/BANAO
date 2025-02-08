import React from "react";


const End = () => {
  return (
    <div className="container py-5">
      <h1 className="fw-bold">
        Your <span className="text-hobby"><i>Hobby</i></span>, Your{" "}
        <span className="text-community"><i>Community...</i></span>
      </h1>
      <button className="btn btn-started mt-3 fw-bold text-white px-4 py-2 rounded">Get started</button>
      <div className="mt-5">
        <img
          src="https://res.cloudinary.com/duwddcqzi/image/upload/v1738946849/Group_99_dzyawj.png"
          alt="Community Activities"
          className="img-fluid"
        />
      </div>
      <style>
        {`
          .text-hobby {
            color: #9368b7;
          }
          .text-community {
            color: #229bd8;
          }
          .btn-started:hover {
            background-color: #7d56a1;
          }
          .btn-started {
            background-color: #9368b7;
          }
        `}
      </style>
    </div>
  );
};

export default End;
