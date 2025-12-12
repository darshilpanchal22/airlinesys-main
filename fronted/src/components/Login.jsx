import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8081/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        navigate("/dashboard");
      }
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-300 px-4">
      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/40 shadow-xl rounded-2xl p-8 w-full max-w-md border border-white/30">
        <h2 className="text-4xl font-extrabold text-center text-blue-700 drop-shadow-md">
          Welcome Back ✈️
        </h2>
        <p className="text-center text-gray-700 mt-2 mb-6">
          Login to continue your journey
        </p>

        {error && (
          <p className="text-red-600 bg-red-100 border border-red-300 rounded-lg py-2 px-3 text-sm mb-4 text-center">
            {error}
          </p>
        )}

        {/* FORM */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* EMAIL FIELD */}
          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="absolute left-4 -top-3 text-sm bg-white/70 px-2 rounded-md text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:bg-white/70">
              Email Address
            </label>
          </div>

          {/* PASSWORD FIELD */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              required
              className="peer w-full px-4 py-3 bg-white/60 border border-gray-300 rounded-lg backdrop-blur-sm focus:ring-2 focus:ring-blue-500 outline-none"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label className="absolute left-4 -top-3 text-sm bg-white/70 px-2 rounded-md text-gray-600 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:bg-transparent peer-focus:-top-3 peer-focus:text-sm peer-focus:bg-white/70">
              Password
            </label>

            {/* Show/Hide Password */}
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-3 text-gray-600 hover:text-gray-800"
            >
              {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        {/* FOOTER */}
        <p className="text-sm text-center text-gray-700 mt-6">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-blue-700 font-medium hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
