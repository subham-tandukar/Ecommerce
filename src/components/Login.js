import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [inpValue, setInpValue] = useState({
    email: "",
    password: "",
  });
  const [passwordType, setPasswordType] = useState("password");
  const [invalid, setInvalid] = useState("");
  const [color, setColor] = useState({
    color: "",
  });

  const history = useNavigate();

  const getData = (e) => {
    const { name, value } = e.target;
    setInpValue(() => {
      return {
        ...inpValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { email, password } = inpValue;

    const getUserInfo = localStorage.getItem("user_signIn");

    if (getUserInfo && getUserInfo.length) {
      const userData = JSON.parse(getUserInfo);
      const userLogin = userData.filter((el, k) => {
        return el.email === email && el.password === password;
      });
      if (userLogin.length === 0) {
        setInvalid("Invalid email or password.");
        setColor({
          color: "#ff4949",
        });
      } else {
        localStorage.setItem("user_login", JSON.stringify(userLogin));
        history("/homepage");
      }
    }
  };

  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  return (
    <>
      <div className="form-field uk-container uk-container-expand uk-padding">
        <div className="uk-flex uk-flex-middle">
          <img src="images/img.png" alt="" />
          <h1>Hello!</h1>
        </div>
        <div>
          <h2>Welcome to login page</h2>
          <p>
            Need an account?
            <Link to="/" className="login-here">
              Sign up here
            </Link>
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-bg">
            <div className="input">
              <input
                type="email"
                className="uk-input"
                name="email"
                autoComplete="off"
                value={inpValue.email}
                onChange={getData}
                required
              />
              <span className="span">Email</span>
            </div>

            <div className="password input">
              <input
                type={passwordType}
                className="uk-input"
                name="password"
                value={inpValue.password}
                onChange={getData}
                required
              />
              <span className="span">Password</span>
              <span uk-toggle="target: .toggle" onClick={showPassword}>
                <i
                  className="fa fa-eye-slash toggle"
                  title="Show Password"
                ></i>
                <i
                  className="fa fa-eye toggle"
                  title="Hide Password"
                  hidden
                ></i>
              </span>
            </div>
          </div>

          <div className="uk-margin-top invalid-details">
            <span style={color}>{invalid}</span>
          </div>

          <div className="login">
            <div className="uk-flex uk-flex-middle uk-flex-between uk-flex-wrap">
              <div className="uk-flex uk-flex-middle uk-flex-wrap">
                <div
                  className="remember-me uk-flex"
                  uk-toggle="target: #agree; cls:toggle-agree"
                >
                  <span uk-icon="check" id="agree"></span>
                </div>
                <p>Remember me</p>
              </div>

              <div>
                <span className="forget">Forget Password?</span>
              </div>
            </div>
            <button
              type="submit"
              className="uk-button uk-width-1-2@s uk-margin-auto uk-margin-top"
            >
              Login
            </button>
          </div>
        </form>

        <div className="sign-up-btn">
          <p>Haven't sign up yet?</p>

          <Link to="/">
            <button
              type="button"
              className="uk-button uk-width-1-2@s uk-margin-auto"
            >
              Sign Up
            </button>
          </Link>

          <div className="uk-margin-medium-top uk-padding uk-position-relative">
            <Link to="/" className="return-back">
              <span className="return-back-icon">
                <i className="fa fa-arrow-left"></i>
              </span>
              <span className="return-back-text"> Return Back</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
