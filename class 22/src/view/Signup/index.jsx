import { useState } from "react";
import { signup } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmial] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSignup = () => {
        signup(email, password);
        alert("Sign up successful");
        navigate('/login');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h2 className="text-3xl font-bold mb-6">Sign Up</h2>
            <input 
                type="text" 
                onChange={(e) => setEmial(e.target.value)} 
                placeholder="Enter Email" 
                className="mb-4 p-3 border rounded-lg w-80"
            />
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Enter Password" 
                className="mb-4 p-3 border rounded-lg w-80"
            />        
            <button 
                onClick={handleSignup} 
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                Sign Up
            </button>
        </div>
    );
}

export default Signup;
