import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth_post } from "../authentication";

const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();

    const register = async (e) => {
        e.preventDefault();
        const body = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
              }
        const registerResponse = await auth_post("/auth/register", body);
        if(registerResponse.status == 201){
            navigate("/home");
        }
        else{
            console.log(registerResponse.body);
            setErrors(registerResponse.body.error);
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
            <h1>{errors}</h1>
            <div>
                Already Have an Account? <Link to="/login">Log in!</Link>
            </div>
        </form>
    )
};

export default RegisterScreen;