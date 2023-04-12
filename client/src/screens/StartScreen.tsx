import { useAuth0 } from "@auth0/auth0-react";

export default function StartScreen() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  const handleSignUp = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: window.location.origin,
      },
      authorizationParams: {
        screen_hint: "signup",
      },
    });
  };

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>TEST</button>
      <button onClick={() => logout()}>Log Out</button>
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}
