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
  const [error, setError] = useState(null);
  const signInUser = async () => {
    try{
      await signInWithEmailAndPassword(auth, email, password);
      setError(null);
    }catch(error){
      setError("Incorrect email or password");
    }
  };
  const googleSignIn = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      await signInWithRedirect(auth, googleProvider);
    } catch (error){console.error("Error signing in with Google:", error);}
  };
  return(
    <div className="login-page">
      <div className="login-page-background">
        <img src="https://firebasestorage.googleapis.com/v0/b/moviebox-1d242.appspot.com/o/flat.png?alt=media&token=aea3b92e-75da-4e10-b248-1480efd0010c" alt=""/>
      </div>
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
          Don't have an account?{" "}
          <Link to="/signup" className="text-link">
            Sign Up
          </Link>
        </p>
        <button id="button-create" onClick={signInUser}>
          <i className="ri-mail-line"></i> Log in
        </button>
        <button id="button-google" onClick={googleSignIn}>
          <i className="ri-google-line"></i> Sign in with Google
        </button>
        <div>{error && <p>{error}</p>}</div>
      </div>
    </div>
  );
};
export default Login;
