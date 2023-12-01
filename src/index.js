import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import StoryView from "./timeline/StoryView/StoryView.js";
import UserLogin from "./userLogin/UserLogin"
import Register from "./userLogin/Register/Register.js";
import PasswordReset from "./userLogin/PasswordReset/PasswordReset.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/stories" element={<StoryView />} />
        <Route path="/login" element={<UserLogin/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/passReset" element={<PasswordReset/>} />
      </Routes>
    </BrowserRouter>
</React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
