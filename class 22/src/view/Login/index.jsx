import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/firebase";


const Login = () => {
    const [email, setEmial] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handlelogin = () => {
        login(email, password)
        navigate ('/add')
    }
    return (
        <>
        <h1>Login</h1>
        <input type="" placeholder="Enter Emial" onChange={(e) => setEmial(e.target.value)} />
        <input type="" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handlelogin}>Login</button>

        </>
    )
}

export default Login