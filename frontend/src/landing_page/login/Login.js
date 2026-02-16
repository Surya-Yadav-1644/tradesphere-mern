// import React, { useState } from "react";
// import axios from "axios";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:3002/login",
//         { email, password }
//       );

//       localStorage.setItem("token", res.data.token);

//       alert("Login successful");
//     } catch (err) {
//       alert(err.response?.data?.message || "Invalid credentials");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>

//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import "../Auth.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:3002/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login Successful 🚀");
      navigate("/");
    } catch (err) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back 👋</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        <p className="switch-link" onClick={() => navigate("/signup")}>
          Don't have an account? Signup
        </p>
      </div>
    </div>
  );
}

export default Login;

