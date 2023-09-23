import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { auth, googleProvider } from "../config/Firebase";
import {
  createUserWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  sendEmailVerification,
} from "firebase/auth";
import { Link} from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToHome, setRedirectToHome] = useState(false); // State for redirection


  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setRedirectToHome(true); // Set to true to trigger redirection
      }
    });

    return () => {
      unsubscribe(); // Unsubscribe from the auth state change listener when the component unmounts
    };
  }, []);

  const createAccount = async () => {
    try {
      await setPersistence(auth, browserSessionPersistence);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Send email verification link to the user
      await sendEmailVerification(auth.currentUser);

      // Redirect to a page informing the user to verify their email
      // history.push("/");
    } catch (error) {
      console.error("Error creating account:", error);
    }
  };

  if (redirectToHome) {
    return <Redirect to="/" />; // Redirect to the homepage if authenticated
  }

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
        <p className="login-para">
          Already have an account?{" "}
          <Link to="/login" className="text-link">
            Log in
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
