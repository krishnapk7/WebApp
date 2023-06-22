import { useAuth0 } from "@auth0/auth0-react";
import { auth_post } from "../authentication";
import Navbar from "../components/Navbar";
import Modal from "../components/Modal";
import { useState } from "react";

export default function AddNoteScreen() {
  const { user } = useAuth0();
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState<File>();
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const nameInput = document.getElementById("name") as HTMLInputElement;
    const textInput = document.getElementById("text") as HTMLInputElement;

    const body = {
      name: nameInput.value,
      text: textInput.value,
      user: user?.email,
      image: URL.createObjectURL(image),
    };
    const res = await auth_post("/note/addNote", body);
    setShowModal(true);
    console.log(image);
    console.log(res.body);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Text
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="text"
            ></input>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Image
            </label>
            <input
              type="file"
              name="myImage"
              onChange={(event) => {
                console.log(event.target);
                const reader = new FileReader();
                if (
                  event.target &&
                  event.target.files &&
                  event.target.files[0]
                ) {
                  // reader.onloadend = () => {
                  //   setImage(reader?.result);
                  // };
                  setImage(event.target.files[0]);
                  console.log(URL.createObjectURL(event.target.files[0]));
                  reader.readAsDataURL(event.target.files[0]);
                }
              }}
            />
            {image && (
              <img
                alt="not found"
                width="250px"
                src={URL.createObjectURL(image)}
              />
            )}
          </div>
          <button
            className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
      <Modal visible={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}
