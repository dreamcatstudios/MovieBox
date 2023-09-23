import React, { useState } from "react";
import "./SignUp.css";

import { auth, googleProvider } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithRedirect,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  const googleSignIn = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithRedirect(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h1>Create Your Free Account</h1>
        <div className="input-container">
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login">
            <a href="#" className="text-link">
              Log in
            </a>
          </Link>
        </p>
        <button id="button-create" onClick={createAccount}>
          <i className="ri-mail-line"></i> Create Account
        </button>
        <button id="button-google" onClick={googleSignIn}>
          <i className="ri-google-line"></i> Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
