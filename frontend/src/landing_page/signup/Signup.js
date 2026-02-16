// import React, { useState } from "react";
// import axios from "axios";

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSignup = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:3002/signup",
//         { name, email, password }
//       );

//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response?.data?.message || "Error");
//     }
//   };

//   return (
//     <div>
//       <h2>Signup</h2>

//       <form onSubmit={handleSignup}>
//         <input
//           type="text"
//           placeholder="Name"
//           onChange={(e) => setName(e.target.value)}
//           required
//         />

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

//         <button type="submit">Signup</button>
//       </form>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from "react";
import axios from "axios";
import "../Auth.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3002/signup", {
        name,
        email,
        password,
      });

      alert("Account Created 🎉");
      navigate("/login");
    } catch (err) {
      alert("Error occurred");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account 🚀</h2>

        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            required
          />

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

          <button type="submit">Signup</button>
        </form>

        <p className="switch-link" onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
}

export default Signup;

