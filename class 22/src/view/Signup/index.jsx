import { useState } from "react";
import { signup } from "../../config/firebase";
import { useNavigate } from "react-router-dom";


const Signup = () => {
    const [email, setEmial] = useState('')
    const [password, setPassword] = useState('')
    const navigate =  useNavigate ()

    const handelsignup = () => {
        signup(email, password)
        alert("ok")
        navigate('/login')
    }
    return (
    <>
    <h2>Sign up</h2>
    <input type="text" onChange={(e) => setEmial(e.target.value)} placeholder="Enter Email" />
    <input type="text" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" />        
    <button onClick={handelsignup}>Login</button>
    </>
    )

}

export default Signup