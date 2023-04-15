import { useAuth0 } from "@auth0/auth0-react";

const HomeScreen = () => {
  const { logout, user } = useAuth0();

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <img src={user?.picture} />
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default HomeScreen;
