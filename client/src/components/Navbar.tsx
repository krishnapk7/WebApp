import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";

export default function () {
  const { logout } = useAuth0();
  return (
    <nav className="bg-gray-700">
      <div className="container mx-auto py-4 flex justify-between items-center">
        <NavLink className="text-2xl font-bold text-gray-50" to={"/home"}>
          WebApp
        </NavLink>
        <NavLink className=" text-gray-50" to={"/addNote"}>
          Add Note
        </NavLink>
        <button
          onClick={() => logout()}
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Log Out
        </button>
      </div>
    </nav>
  );
}
