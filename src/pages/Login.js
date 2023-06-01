import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changePath } from "../store/StoreInterface";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

  function handleOnFormSubmit(event) {
    event.preventDefault();
    // Add your form submission logic here
  }
  function handleSignup() {
    dispatch(changePath("/signup"));
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="flex flex-col items-center p-6 rounded bg-white shadow-md"
        onSubmit={handleOnFormSubmit}
      >
        <h2 className="text-2xl mb-4 text-blue-900 shadow-md">Login</h2>
        <input
          type="text"
          placeholder="Email"
          className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded"
          onChange={handleEmailChange}
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-64 px-4 py-2 mb-4 border border-gray-300 rounded"
          onChange={handlePasswordChange}
          value={password}
        />
        <button
          type="submit"
          className="w-32 px-4 py-2 bg-blue-700 text-white rounded cursor-pointer"
        >
          Login
        </button>
        <p className="mt-4 text-gray-600">
          Don't have an account?{" "}
          <a onClick={handleSignup} className="text-blue-900">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}

export default Login;
