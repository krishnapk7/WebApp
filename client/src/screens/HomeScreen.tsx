import { useAuth0 } from "@auth0/auth0-react";
import { auth_post } from "../authentication";
import { useEffect } from "react";

const HomeScreen = () => {
  const { logout, user } = useAuth0();

  useEffect(() => {
    console.log(user);
    const body = {
      name: user?.name,
      email: user?.email,
      profile_pic: user?.picture,
    };

    const res = auth_post("/user/addUser", body);
    console.log(res);
  });

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <img src={user?.picture} />
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default HomeScreen;
