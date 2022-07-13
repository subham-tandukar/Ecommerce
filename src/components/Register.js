import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [inpValue, setInpValue] = useState({
    fullname: "",
    email: "",
    password: "",
    repeatPassword: "",
    number: "",
    birthday: "",
    gender: "",
  });
  const [passwordLength, setPasswordLength] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [repeatPasswordType, setRepeatPasswordType] = useState("password");
  const data = [];

  const [popUp, setPopUp] = useState({
    opacity: "1",
    transform: "translateY(-100%)",
  });
  const [popUpModal, setPopUpModal] = useState({
    opacity: "1",
    transform: "translateY(-100%)",
  });

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

    const { password, repeatPassword } = inpValue;

    setPasswordLength(
      inpValue.password.length > 8
        ? ""
        : "Password must be of at least 8 characters."
    );
    setMatchPassword(
      inpValue.password === inpValue.repeatPassword
        ? ""
        : "Password didn't matched."
    );

    if (password === repeatPassword) {
      localStorage.setItem("user_signIn", JSON.stringify([...data, inpValue]));
      setTimeout(() => {
        setPopUp({
          opacity: "1",
        });
        setPopUpModal({
          opacity: "1",
          transform: "translateY(0)",
        });
      }, 300);
    }
  };

  const showPassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
    } else {
      setPasswordType("password");
    }
  };

  const showRepeatPassword = () => {
    if (repeatPasswordType === "password") {
      setRepeatPasswordType("text");
    } else {
      setRepeatPasswordType("password");
    }
  };

  return (
    <>
      <div className="sign-up-success" style={popUp}>
        <div className="sign-up-success-modal" style={popUpModal}>
          <h2 className="uk-modal-title">{`Hello ${inpValue.fullname} !`}</h2>
          <p className="text1">
            {" "}
            <span uk-icon="check"></span>Sign Up Successful.
          </p>
          <p className="text2">
            Now you can login{" "}
            <span aria-labelledby="emoji" role="img">
              {" "}
              👍{" "}
            </span>
          </p>

          <Link to="/login">
            <button
              className="uk-button uk-button-default uk-modal-close"
              type="button"
            >
              OK
            </button>
          </Link>
        </div>
      </div>

      <div className="form-field uk-container uk-container-expand uk-padding">
        <div className="uk-flex uk-flex-middle">
          <img src="images/img.png" alt="" />
          <h1>Hello!</h1>
        </div>
        <div>
          <h2>Create your account</h2>
          <p>
            Already member?
            <Link to="/login" className="login-here">
              Login here
            </Link>
          </p>
        </div>

        <form onSubmit={onSubmit}>
          <div className="form-bg">
            <div className="input">
              <input
                type="text"
                className="uk-input"
                value={inpValue.fullname}
                onChange={getData}
                name="fullname"
                autoComplete="off"
                style={{ textTransform: "capitalize" }}
                required
              />
              <span className="span">Fullname</span>
            </div>

            <div className="input">
              <input
                type="email"
                className="uk-input"
                value={inpValue.email}
                onChange={getData}
                name="email"
                autoComplete="off"
                required
              />
              <span className="span">Email</span>
            </div>

            <div className="password input">
              <input
                type={passwordType}
                className="uk-input"
                value={inpValue.password}
                onChange={getData}
                name="password"
                required
              />
              <span className="span">Password</span>
              <span uk-toggle="target: .toggle" onClick={showPassword}>
                <i className="fa fa-eye-slash toggle" title="Show Password"></i>
                <i
                  className="fa fa-eye toggle"
                  title="Hide Password"
                  hidden
                ></i>
              </span>
              <p>{passwordLength}</p>
            </div>

            <div className="password input">
              <input
                type={repeatPasswordType}
                className="uk-input"
                value={inpValue.repeatPassword}
                onChange={getData}
                name="repeatPassword"
                required
              />
              <span className="span">Repeat Password</span>
              <span
                uk-toggle="target: .repeat-toggle"
                onClick={showRepeatPassword}
              >
                <i
                  className="fa fa-eye-slash repeat-toggle"
                  title="Show Password"
                ></i>
                <i
                  className="fa fa-eye repeat-toggle"
                  title="Hide Password"
                  hidden
                ></i>
              </span>
              <p>{matchPassword}</p>
            </div>

            <div className="input">
              <input
                type="number"
                className="uk-input"
                value={inpValue.number}
                onChange={getData}
                name="number"
                required
              />
              <span className="span">Phone Number</span>
            </div>

            <div className="gender uk-flex uk-flex-middle input">
              <div>
                <label>Gender:</label>
              </div>
              <div onChange={getData} value={inpValue.gender}>
                <input
                  className="uk-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                />
                <label htmlFor="male">
                  <span uk-icon="check"></span>
                  male
                </label>
                <input
                  className="uk-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                />
                <label htmlFor="female">
                  <span uk-icon="check"></span>female
                </label>
                <input
                  className="uk-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                />
                <label htmlFor="other">
                  <span uk-icon="check"></span>other
                </label>
              </div>
            </div>

            <div className="birthday uk-flex uk-flex-middle input">
              <div>
                <label>Birthday:</label>
              </div>
              <div className="uk-flex uk-flex-middle">
                <input
                  type="date"
                  className="uk-input"
                  value={inpValue.birthday}
                  onChange={getData}
                  name="birthday"
                  required
                />
              </div>
            </div>
          </div>

          <div className="sign-up uk-flex uk-flex-between@s uk-flex-center uk-flex-wrap uk-margin-top">
            <div className="sign-up-1">
              <div className="uk-flex uk-flex-middle">
                <div
                  className="agree uk-flex"
                  uk-toggle="target: #agree; cls:toggle-agree"
                >
                  <span uk-icon="check" id="agree"></span>
                </div>
                <p>Agree all Terms of Use and Privacy Policy</p>
              </div>
              <button type="submit" className="uk-button">
                Sign Up
              </button>
            </div>

            <div className="sign-up-2">
              <div>
                <p>Or you can sign up with</p>
              </div>

              <div className="uk-flex uk-flex-between uk-flex-wrap social-links">
                <a href="/">
                  <img src="images/fb.png" alt="facebook" />
                </a>
                <a href="/">
                  <img src="images/twtr.png" alt="twitter" />
                </a>
                <a href="/">
                  <img src="images/goggle.png" alt="goggle" />
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
