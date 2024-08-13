import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";

const Login = () => {
    const [email, setEmial] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        login(email, password);
        navigate('/add');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-6">Login</h1>
            <input 
                type="text" 
                placeholder="Enter Email" 
                onChange={(e) => setEmial(e.target.value)} 
                className="mb-4 p-3 border rounded-lg w-80"
            />
            <input 
                type="password" 
                placeholder="Enter Password" 
                onChange={(e) => setPassword(e.target.value)} 
                className="mb-4 p-3 border rounded-lg w-80"
            />
            <button 
                onClick={handleLogin} 
                className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300">
                Login
            </button>
        </div>
    );
}

export default Login;
