import React, { useState } from "react";
import "./Login.css";

// import { auth, googleProvider } from "../config/Firebase";
// import {
//   createUserWithEmailAndPassword,
//   signInWithRedirect,
//   setPersistence,
//   browserSessionPersistence,
// } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const createAccount = async () => {
  //     try {
  //       await setPersistence(auth, browserSessionPersistence);
  //       await createUserWithEmailAndPassword(auth, email, password);
  //     } catch (error) {
  //       console.error("Error creating account:", error);
  //     }
  //   };

  //   const googleSignIn = async () => {
  //     try {
  //       await setPersistence(auth, browserSessionPersistence);
  //       await signInWithRedirect(auth, googleProvider);
  //     } catch (error) {
  //       console.error("Error signing in with Google:", error);
  //     }
  //   };

  return (
    <div className="">
      <div className="">
        {/* Image Div Container */}
        <div className="">
          <img
            className=""
            src="/src/assets/Cloud storage or virtual storage.png"
            alt=""
          />
        </div>
        {/* Content Div Container */}
        <div className="">
          <div>
            <h1 className="">Create your free account</h1>
          </div>
          <div className="">
            <div className="">
              <label htmlFor="email">Email</label>
              <input
                className=""
                type="email" // Changed 'text' to 'email' for email input
                id="email"
                placeholder="Enter your email..."
                value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="password">Password</label>
              <input
                className=""
                type="password" // Changed 'text' to 'password' for password input
                id="password"
                placeholder="Enter your password..."
                // onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>
          <div className="">
            <p>Already have an account? </p>
            <a href="#" className="text-[#FFF599]">
              Log in
            </a>
          </div>

          <div className="">
            <button className="">Create Account</button>
            <button className="">Sign in with Google</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
