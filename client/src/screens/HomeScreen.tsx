import { useAuth0 } from "@auth0/auth0-react";
import { auth_post } from "../authentication";
import { useEffect } from "react";

const HomeScreen = () => {
  const { logout, user } = useAuth0();

  useEffect(() => {
    async function fetchData() {
      console.log(user);
      const body = {
        name: user?.name,
        email: user?.email,
        profile_pic: user?.picture,
      };
      const res = await auth_post("/user/addUser", body);
      if (res.status == 200) {
        console.log(res);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Welcome {user?.name}</h1>
      <img src={user?.picture} />
      <button onClick={() => logout()}>Log Out</button>
    </div>
  );
};

export default HomeScreen;
