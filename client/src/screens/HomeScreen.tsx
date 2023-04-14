import { useAuth0 } from "@auth0/auth0-react";

const HomeScreen = () => {
  const { logout } = useAuth0();

  return (
    <div>
      <h1>HOME PAGE</h1>
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default HomeScreen;
