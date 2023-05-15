import { useAuth0 } from "@auth0/auth0-react";

export default function StartScreen() {
  const { loginWithRedirect } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "http://127.0.0.1:5173/home/",
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={() => loginWithRedirect()}
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Log In
      </button>
      <button
        onClick={handleSignUp}
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Sign Up
      </button>
    </div>
  );
}
