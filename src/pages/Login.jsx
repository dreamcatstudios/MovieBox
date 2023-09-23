import React, { useState } from "react";
import "./Login.css";

import { auth, googleProvider } from "../config/Firebase";
import {
  signInWithEmailAndPassword,
  signInWithRedirect,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const signInUser = async () => {
    try {
      signInWithEmailAndPassword(auth, email, password);
      setError(false);
    } catch (error) {
      setError(true);
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
        <h1>Login back to your account</h1>
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
        <p className="login-para">
          Dont't have a account?{" "}
          <Link to="/signup">
            <a href="#" className="text-link">
              Sign Up
            </a>
          </Link>
        </p>
        <button id="button-create" onClick={signInUser}>
          <i className="ri-mail-line"></i> Log in
        </button>
        <button id="button-google">
          <i className="ri-google-line" onClick={googleSignIn}></i>Sign in with
          Google
        </button>
        <div>{error && <p>Incorrect email or password</p>}</div>
      </div>
    </div>
  );
};

export default Login;
