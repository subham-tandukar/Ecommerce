import React from "react";
import RegisterImg from "./RegisterImg";
import Register from "./Register";

const RegisterForm = () => {
  return (
    <>
      <div className="uk-grid uk-child-width-1-2@m register-form">
        <div>
          <Register />
        </div>

        <div className="uk-flex uk-flex-middle">
          <RegisterImg />
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
