import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signup, login } from "../../config/firebase";

export default  function Login () {
    const navigate = useNavigate()
    const [ email, setEmail ] = useState()
    const [ Password, setPassword ] = useState()

    const signIn = async() => {
        try {
            await login ( email, Password )
            alert("Succesfully")
            navigate ('/')
        }
        catch (e) {
            alert(e.message)
        }
    }

    const signup = async() => {
        try {
            await signup (email, Password)
            alert("Good")
            navigate('/login')
        } catch (e) {
            alert(e.message)
        }
    }
    return (
        <>
        <input type="text" name=""  placeholder="Emial" onChange={e => setEmail(e.target.value)} id="" />
        <input type="text" name="" placeholder="Password" onChange={e => setPassword(e.target.value)} id="" />


        <button onClick={() =>signup}>Signup</button>
        <button onClick={() =>signIn}>signIn</button>

        </>
    )

}