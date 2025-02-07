import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const AuthSection = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "#F8F6FC"}}>
      <div className="row w-75">
        {/* Left Side */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-3">
          <h1 className="fw-bold">
            Explore your <span className="text-primary">hobby</span> or <span className="text-secondary">passion</span>
          </h1>
          <p className="text-muted">
            Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, 
            classes, workshops, and places to practice, participate or perform.
          </p>
          <img src="https://res.cloudinary.com/duwddcqzi/image/upload/v1738941337/Group_27_kjlwr0.png" alt="Hobby Illustration" className="img-fluid mt-3" />
        </div>

        {/* Right Side - Auth Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center p-5 rounded"style={{ backgroundColor: "#F8F6FC"}}>
          <div className="d-flex">
            <h4 className={isSignUp ? "text-muted" : "fw-bold border-bottom border-3 pb-1 px-4"} onClick={() => setIsSignUp(false)}>Sign In</h4>
            <h4 className={!isSignUp ? "text-muted" : "fw-bold border-bottom border-3 pb-1 px-4"} onClick={() => setIsSignUp(true)}>Join In</h4>
          </div>
          <div className="mt-4">
            <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center mb-2">
              <FaGoogle className="me-2" /> Continue with Google
            </button>
            <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center">
              <FaFacebook className="me-2" /> Continue with Facebook
            </button>
            <div className="text-center mt-3 text-muted">Or connect with</div>
          </div>

          <form className="mt-3">
            <input type="email" className="form-control mb-3" placeholder="Email" required />
            <div className="input-group mb-3">
              <input type={showPassword ? "text" : "password"} className="form-control" placeholder="Password" required />
              <span className="input-group-text" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            {isSignUp && (
              <div className="form-check mb-3">
                <input type="checkbox" className="form-check-input" id="terms" required />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.
                </label>
              </div>
            )}

            {!isSignUp && (
              <div className="d-flex justify-content-between mb-3">
                <div>
                  <input type="checkbox" className="form-check-input" id="rememberMe" />
                  <label className="form-check-label ms-2" htmlFor="rememberMe">Remember me</label>
                </div>
                <a href="#" className="text-decoration-none"><FaLock className="me-1" /> Forgot password?</a>
              </div>
            )}

            <button type="submit" className="btn btn-dark w-100">{isSignUp ? "Join Now" : "Continue"}</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthSection;

