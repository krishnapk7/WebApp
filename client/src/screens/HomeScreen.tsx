import { useAuth0 } from "@auth0/auth0-react";
import { auth_post } from "../authentication";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();

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
      <Navbar />
      <h1>Welcome {user?.name}</h1>
      <img src={user?.picture} />
      <button onClick={() => navigate("/addNote")}>Add Note</button>
    </div>
  );
};

export default HomeScreen;
