// import React, { useState } from "react";
// import "./Login.css";

// // import { auth, googleProvider } from "../config/Firebase";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithRedirect,
// //   setPersistence,
// //   browserSessionPersistence,
// // } from "firebase/auth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //   const createAccount = async () => {
//   //     try {
//   //       await setPersistence(auth, browserSessionPersistence);
//   //       await createUserWithEmailAndPassword(auth, email, password);
//   //     } catch (error) {
//   //       console.error("Error creating account:", error);
//   //     }
//   //   };

//   //   const googleSignIn = async () => {
//   //     try {
//   //       await setPersistence(auth, browserSessionPersistence);
//   //       await signInWithRedirect(auth, googleProvider);
//   //     } catch (error) {
//   //       console.error("Error signing in with Google:", error);
//   //     }
//   //   };

//   return (
//     <div className="">
//       <div className="">
//         {/* Image Div Container */}
//         <div className="">
//           <img
//             className=""
//             src="/src/assets/Cloud storage or virtual storage.png"
//             alt=""
//           />
//         </div>
//         {/* Content Div Container */}
//         <div className="">
//           <div>
//             <h1 className="">Create your free account</h1>
//           </div>
//           <div className="">
//             <div className="">
//               <label htmlFor="email">Email</label>
//               <input
//                 className=""
//                 type="email" // Changed 'text' to 'email' for email input
//                 id="email"
//                 placeholder="Enter your email..."
//                 value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="">
//               <label htmlFor="password">Password</label>
//               <input
//                 className=""
//                 type="password" // Changed 'text' to 'password' for password input
//                 id="password"
//                 placeholder="Enter your password..."
//                 // onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//               />
//             </div>
//           </div>
//           <div className="">
//             <p>Already have an account? </p>
//             <a href="#" className="text-[#FFF599]">
//               Log in
//             </a>
//           </div>

//           <div className="">
//             <button className="">Create Account</button>
//             <button className="">Sign in with Google</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import "./Login.css";

// // import { auth, googleProvider } from "../config/Firebase";
// // import {
// //   createUserWithEmailAndPassword,
// //   signInWithRedirect,
// //   setPersistence,
// //   browserSessionPersistence,
// // } from "firebase/auth";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //   const createAccount = async () => {
//   //     try {
//   //       await setPersistence(auth, browserSessionPersistence);
//   //       await createUserWithEmailAndPassword(auth, email, password);
//   //     } catch (error) {
//   //       console.error("Error creating account:", error);
//   //     }
//   //   };

//   //   const googleSignIn = async () => {
//   //     try {
//   //       await setPersistence(auth, browserSessionPersistence);
//   //       await signInWithRedirect(auth, googleProvider);
//   //     } catch (error) {
//   //       console.error("Error signing in with Google:", error);
//   //     }
//   //   };

//   return (
//     <div className="">
//       <div className="">
//         {/* Content Div Container */}
//         <div className="head">
//           <div>
//             <h1 className="head" id="heading">Create your free account</h1>
//           </div>
//           <div className="mail">
//             <div className="mail">
//               <h4 id="mailid" htmlFor="email">Email:  </h4><br />
//               <input
//                 className="mailph"
//                 type="email" // Changed 'text' to 'email' for email input
//                 id="email"
//                 placeholder="Enter your email..."
//                 value={email}
//                 // onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>

//             <div className="pass">
//               <h4 id="passid" htmlFor="password">Password: </h4><br />
//               <input
//                 className="mailph"
//                 type="password" // Changed 'text' to 'password' for password input
//                 id="password"
//                 placeholder="Enter your password..."
//                 // onChange={(e) => setPassword(e.target.value)}
//                 value={password}
//               />
//             </div>
//           </div>
//           <div className="head2">
//             <p>Already have an account? </p>
//             <a href="#" className="text-[#FFF599]">
//               Log in
//             </a>
//           </div>
//           <div className="button">
//             <button className="button">Create Account</button><br /><br />
//             <button className="button">Sign in with Google</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <div className="login-page">
        <div className="login-container">
            <h1>Create Your Account Free</h1>
            <div className="email">
                <h2>Email:</h2>
                <input type="mail" placeholder='Enter your email'/>
            </div>
            <div className="password">
                <h2>Password:</h2>
                <input type="password" placeholder='enter your password'/>
            </div>
            <button id = "button-create">
                <i class="ri-mail-line"></i>
                create your account
            </button>
            <button id = "button-google">
                <i class="ri-google-line"></i>
                Sign in with google
            </button>
        </div>
        <div className="login-container-2"></div>
    </div>
  )
}

export default Login



