"use client";

import React from "react";
import "./EmailSignup.scss";

const EmailSignup = () => {
  return (
    <form action="">
      <input
        className="signupInput"
        type="text"
        placeholder="Enter your email"
      />
      <button className="signupBtn">Sign Up</button>
    </form>
  );
};

export default EmailSignup;
