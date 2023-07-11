import { useAuth0 } from "@auth0/auth0-react";
import { auth_post, auth_get } from "../authentication";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const { user } = useAuth0();
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);

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
      const body1 = {
        user: user?.email,
      };
      const response = await auth_post("/note/getNotes", body1);
      console.log(response.body.noteUser);
      setNotes(response.body.noteUser);
    }
    fetchData();
  }, []);

  const deleteNote = async (id: any) => {
    const body = {
      id: id,
    };
    await auth_post("/note/deleteNote", body);
  };

  return (
    <div>
      <Navbar />
      <h1>Welcome {user?.name}</h1>
      <img src={user?.picture} />
      <button
        onClick={() => navigate("/addNote")}
        className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Add Note
      </button>
      <ul>
        {notes.map((note: any) => (
          <li>
            <p>Name: {note?.name}</p>
            <p>Text: {note?.text}</p>
            <p>ID: {note?._id}</p>
            <img alt="" width="250px" src={note?.image} />
            <button
              onClick={() => deleteNote(note?._id)}
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomeScreen;
