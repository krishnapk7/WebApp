import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth_post } from "../authentication";

const LoginScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const login = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const body = {
          firstName: firstName,
          lastName: lastName,
          email: email,
          password: password,
        }
        const loginResponse = await auth_post("/auth/login", body);
        if(loginResponse.status == 200){
            navigate("/home");
        }
    };

    return(
        <form>
            <label>First Name:</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstName" id="firstName" name="firstName" />
            <label>Last Name:</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastName" id="lastName" name="lastName" />
            <label>email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label>password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <button onClick={login}>Log In</button>
            <div>
                Don't have an account? <Link to="/">Create a New Account!</Link>
            </div>
        </form>
    )
};

export default LoginScreen;