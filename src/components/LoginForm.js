import React from "react";
import Login from "./Login";
import LoginImg from "./LoginImg";

const LoginForm = () => {
  return (
    <>
      <div className="uk-grid uk-child-width-1-2@m login-form">
        <div>
          <Login />
        </div>

        <div className="uk-flex uk-flex-middle">
          <LoginImg />
        </div>
      </div>
    </>
  );
};

export default LoginForm;
