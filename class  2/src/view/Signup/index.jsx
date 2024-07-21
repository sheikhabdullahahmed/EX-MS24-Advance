import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup } from "../../config/firebase"; 

const Signup = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSignup = () => {
    signup(email, password);
  };

  const goToLogin = () => {o  
    alert("go to login")
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold mb-6 text-gray-700">Sign Up</h2>
        <input
          className="w-full h-12 px-4 mb-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="w-full h-12 px-4 mb-4 rounded-lg border border-gray-300 focus:border-blue-500  focus:ring-blue-200 outline-none"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full h-12 bg-blue-500 text-white rounded-lg hover:bg-blue-600 mb-4"
          onClick={handleSignup}
        >
          Sign Up
        </button>
        <button
          className="w-full h-12 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
          onClick={goToLogin}
        >
          Go to Login
        </button>
      </div>
    </div>
  );
};

export default Signup;
