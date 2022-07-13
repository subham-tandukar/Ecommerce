import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        <h1>404 Page Not Found</h1>
        <Link to="/login" className="error-btn">
          Redirect to Login Page
        </Link>
      </div>
    </>
  );
};

export default ErrorPage;
