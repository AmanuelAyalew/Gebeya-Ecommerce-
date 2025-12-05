import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill all fields.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    try {
      signup({ name, email, password });
      navigate("/");
    } catch (err) {
      setError(err.message || "Signup failed");
    }
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold mb-4">Create an account</h2>
        {error && <div className="text-sm text-red-600 mb-3">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label className="block mb-2">Name</label>
          <input
            className="w-full mb-3 p-2 border rounded"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full mb-3 p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="block mb-2">Password</label>
          <input
            type="password"
            className="w-full mb-3 p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="block mb-2">Confirm Password</label>
          <input
            type="password"
            className="w-full mb-4 p-2 border rounded"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
          <button
            className="w-full bg-primary text-white py-2 rounded"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-primary">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
