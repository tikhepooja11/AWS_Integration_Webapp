import React, { useState } from "react";
import { signIn } from "aws-amplify/auth";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    console.log("hello pooja");
    try {
      await signIn(username, password);
      console.log("User signed in");
      // Redirect or perform actions upon successful sign-in
    } catch (error) {
      console.error("Error signing in", error);
      // Handle sign-in failure
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};

export default Login;
