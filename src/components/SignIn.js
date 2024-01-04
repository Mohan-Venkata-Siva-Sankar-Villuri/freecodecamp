import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const SignIn = () => {
  const history = useHistory();
  const { signIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:5000/signin", {
        email,
        password,
      });

      const { token } = response.data;

      // Store the token (e.g., in local storage)

      const userData = {
        name: "John Doe",
        email: email,
        // ... other user data
      };

      signIn(userData); // Update the authentication state

      // Redirect to courses page
      history.push("/courses");
    } catch (error) {
      console.error("Sign in error:", error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
