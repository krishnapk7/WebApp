import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { auth_post } from "../authentication";

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const register = async () => {
        const body = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
              }
        const registerResponse = auth_post("/auth/register", body);
        if((await registerResponse).status == 201){
            navigate("/home");
        }
        else{
            console.log(registerResponse.body);
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
            <button onClick={register}>Register</button>
        </form>
    )
};

export default RegisterScreen;