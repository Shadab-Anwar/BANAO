import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaGoogle, FaYoutube, FaTelegram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer pt-5 text-dark">
      <div className="container">
        <div className="row">
          {/* Hobbycue Section */}
          <div className="col-md-3">
            <h6 className="fw-bold fs-5 mb-3">Hobbycue</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Our Services</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Work with Us</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">FAQ</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Contact Us</a></li>
            </ul>
          </div>

          {/* How Do I Section */}
          <div className="col-md-3">
            <h6 className="fw-bold fs-5 mb-3">How Do I</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Sign Up</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Add a Listing</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Claim Listing</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Post a Query</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Add a Blog Post</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Other Queries</a></li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-3">
            <h6 className="fw-bold fs-5 mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Listings</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Blog Posts</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Shop / Store</a></li>
              <li className="mb-2"><a href="#" className="text-dark text-decoration-none small">Community</a></li>
            </ul>
          </div>

          {/* Social Media & Invite Section */}
          <div className="col-md-3">
            <h6 className="fw-bold fs-5 mb-3">Social Media</h6>
            <div className="d-flex social-icons">
              <a href="#" className="fs-5 text-secondary me-3"><FaFacebookF /></a>
              <a href="#" className="fs-5 text-secondary me-3"><FaTwitter /></a>
              <a href="#" className="fs-5 text-secondary me-3"><FaInstagram /></a>
              <a href="#" className="fs-5 text-secondary me-3"><FaPinterestP /></a>
              <a href="#" className="fs-5 text-secondary me-3"><FaGoogle /></a>
              <a href="#" className="fs-5 text-secondary me-3"><FaYoutube /></a>
              <a href="#" className="fs-5 text-secondary me-3"><FaTelegram /></a>
              <a href="#" className="fs-5 text-secondary me-3"><FaEnvelope /></a>
            </div>

            <h6 className="fw-bold mt-4 fs-5 mb-3">Invite Friends</h6>
            <div className="d-flex">
              <input type="email" className="form-control invite-input" placeholder="Email ID" />
              <button className="btn invite-btn">Invite</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-3 copyright">
        © Purple Cues Private Limited
      </div>

      {/* Custom Styles */}
      <style>
        {`
          .social-icons a:hover {
            color: black;
          }
          .invite-input {
            border: 1px solid #9368b7;
            border-radius: 5px 0 0 5px;
            padding: 8px;
          }
          .invite-btn {
            background-color: #9368b7;
            color: white;
            border: none;
            border-radius: 0 5px 5px 0;
            padding: 8px 15px;
          }
          .invite-btn:hover {
            background-color: #7d56a1;
          }
          .copyright {
            font-size: 14px;
            color: #333;
            background: #f8f6fb;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
