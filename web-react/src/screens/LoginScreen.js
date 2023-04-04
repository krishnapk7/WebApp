import React, {useState} from "react";

const LoginScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <form>
            <label for="firstName">First Name:</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstName" id="firstName" name="firstName" />
            <label for="lastName">Last Name:</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastName" id="lastName" name="lastName" />
            <label for="email">email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" />
            <label for="password">password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" />
            <button>Log In</button>
        </form>
    )
};

export default LoginScreen;