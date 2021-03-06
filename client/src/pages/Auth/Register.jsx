import React from "react";
import { Link } from "react-router-dom";
import { logoRegister, registerImg } from "../../images";
import "./Authentication.scss";
import { useLocation } from "react-router-dom";

const Register = (props) => {
  const { pathname } = useLocation();

  const registerContent = () => {
    switch (pathname.replace("/", "")) {
      case "register":
        return {
          stage: "1",
          stagetext: "/2 - Registration",
        };
      case "formed":
        return {
          stage: "2",
          stagetext: "/2 - Wait for answer!",
        };
      default:
        return {
          stage: "1",
          stagetext: "/2 - Registration",
        };
    }
  };

  return (
    <div className="Auth">
      <div className="auth_nav">
        <div className="nav_logo">
          <img src={logoRegister} alt="logo" />
        </div>
        <div className="nav_button">
          <Link to={"/login"} className="nav_link">
            Sign in
          </Link>
        </div>
      </div>
      <div className="auth_content">
        <div className="content_left">
          <h2>Connect your team with WorkFly</h2>
          <h6>
            <span>{registerContent().stage}</span>
            {registerContent().stagetext}
          </h6>
          <p>
            Already have an accout?{" "}
            <Link to={"/login"} className="left_link">
              Sign in
            </Link>
          </p>
          <div className="left_img">
            <img src={registerImg} alt="register-img" />
          </div>
        </div>
        <div className="content_right">
          <div className="register_component">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default Register;
