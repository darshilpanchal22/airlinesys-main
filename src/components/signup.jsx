import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required");
      return;
    }

    try {
      await axios.post("http://localhost:8081/api/auth/signup", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      setError("Signup failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Create Account</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="w-full px-4 py-3 border rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Login here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;