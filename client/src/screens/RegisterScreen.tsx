import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth_post } from "../authentication";
import { useSignIn } from "react-auth-kit";

export default function RegisterScreen() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const navigate = useNavigate();
    const signIn = useSignIn();

    const register = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const body = {
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
              }
        const registerResponse = await auth_post("/auth/register", body);
        if(registerResponse.status == 201){
            signIn({
                token: registerResponse.body.token,
                expiresIn: 3600,
                tokenType: "Bearer"
            })
            navigate("/home");
        }
        else{
            console.log(registerResponse.body);
            setErrors(registerResponse.body.error);
        }
    };

    return(
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
  <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
    <div className="mx-auto flex w-full max-w-md flex-col space-y-16">
        <form className="mt-6">
            <div className="flex justify-between gap-3">
            <span className="w-1/2">
            <label className="block text-xs font-semibold text-gray-600 uppercase">First Name:</label>
            <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="firstName" id="firstName" name="firstName" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
            </span>
            <span className="w-1/2">
            <label className="block text-xs font-semibold text-gray-600 uppercase">Last Name:</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="lastName" id="lastName" name="lastName" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
            </span>
            </div>
            <label className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Email:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" name="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
            <label className="block text-xs font-semibold text-gray-600 uppercase">Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" name="password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" />
            <button className="w-full mt-6 bg-gray-300 hover:bg-gray-400 text=gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={register}>Register</button>
            <h1>{errors}</h1>
            <div>
                Already Have an Account? <Link className="font-bold underline" to="/login">Log in!</Link>
            </div>
        </form>
        </div>
        </div>
        </div>
    )
};