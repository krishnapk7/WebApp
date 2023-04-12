import { useAuth0 } from "@auth0/auth0-react";

export default function StartScreen() {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();

  return (
    <div>
      <button onClick={() => loginWithRedirect()}>TEST</button>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
}
