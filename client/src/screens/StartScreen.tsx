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
    <div>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
