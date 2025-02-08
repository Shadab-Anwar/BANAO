import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash, FaLock } from "react-icons/fa";

const AuthSection = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (

    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center auth-section" style={{ backgroundColor: "#F8F6FC"}}>
      <div className="row w-100 p-5">
    
        <div className="col-lg-6 d-flex flex-column justify-content-between" style={{ marginBottom: "-20px" }}>
          <h1 className="fw-bold">
            <i>
            Explore your <span className="text-primary">hobby</span> or <span className="text-secondary">passion</span>
            </i>
          </h1>
          <p className="text-muted">
          Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
          <p className="mt-3">If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
          </p>
          <img src="https://res.cloudinary.com/duwddcqzi/image/upload/v1738941337/Group_27_kjlwr0.png" alt="Hobby Illustration" className="img-fluid" />
        </div>

      
        <div className="col-lg-6 d-flex flex-column justify-content-center p-5 rounded">
          <div className="p-5">
          <div className="d-flex Switch">
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

          <form className="mt-3 ">
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

            <button type="submit" className="btn w-100 btn-outline-dark">{isSignUp ? "Join Now" : "Continue"}</button>
          </form>
        </div>
        </div>
      </div>
<style>
{`
@media (max-width: 995px) {
  .auth-section{
    padding-top: 520px;
    padding-bottom: 540px;
  }
  .auth-section .Switch{
  display: flex;
  }
  .auth-section .row {
    flex-direction: column-reverse !important;
    text-align: center !important;
  }

  .auth-section .col-lg-6 {
    width: 100% !important;
  }

  .auth-section .container-fluid {
    height: auto !important;
    padding: 20px !important;
  }

  .auth-section .d-flex {
    flex-direction: column !important;
    align-items: center !important;
  }

  .auth-section .p-5 {
    padding: 20px !important;
  }

  .auth-section .auth-container {
    background: #F8F6FC !important;
    padding: 30px !important;
    border-radius: 15px !important;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .auth-section .auth-tabs {
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  .auth-section .auth-tabs h4 {
    cursor: pointer;
    font-weight: 600;
  }

  .auth-section .auth-tabs h4.active {
    color: #6B4E9C;
    border-bottom: 2px solid #6B4E9C;
    padding-bottom: 5px;
  }

  .auth-section .auth-buttons button {
    font-size: 16px;
    padding: 12px;
    border-radius: 8px;
  }

  .auth-section .auth-form input {
    height: 45px;
    border-radius: 8px;
    font-size: 16px;
  }

  .auth-section .social-buttons button {
    border-radius: 8px;
    padding: 10px;
  }

  .auth-section .bottom-image {
    margin-top: 20px;
  }
}
`}
</style>
    </div>
    
  );
};

export default AuthSection;

