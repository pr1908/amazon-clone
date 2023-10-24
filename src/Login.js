// import React, { useState } from "react";
// import "./Login.css";
// import { Link } from "react-router-dom";
// // import { auth } from "firebase";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const signIn = (e) => {
//     e.preventdefault();
//     auth
//       .signInWithEmail(email, password)
//       //   .auth((auth) => {
//       //     history.push("/");
//       //   })
//       .catch((error) => alert(error.message));
//   };
//   return (
//     <div className="login">
//       <Link to="/">
//         <img
//           className="login_logo"
//           src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg"
//         />
//       </Link>
//       <div className="login_conatiner">
//         <h1>SIGN IN</h1>
//         <form>
//           <h5>email</h5>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           ></input>
//           <h5>password</h5>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           ></input>
//           <button onClick={signIn} type="submit">
//             sign in
//           </button>
//         </form>
//         <p>sign in page</p>
//         <button>create amazon account </button>
//       </div>
//     </div>
//   );
// }

// export default Login;
