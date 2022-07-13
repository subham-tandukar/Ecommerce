import React from "react";
import "./App.css";
import "./animate.css";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Homepage from "./components/Homepage";
import ErrorPage from "./components/ErrorPage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
