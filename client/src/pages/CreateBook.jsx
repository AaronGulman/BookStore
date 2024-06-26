import { useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";
import { useNavigate } from "react-router-dom";
import { enqueueSnackbar, useSnackbar } from "notistack";

const CreateBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    // Validate the data before sending
    if (!title || !author || !page || !pubYear) {
      alert("All fields are required");
      return;
    }
    if (isNaN(page) || page <= 0) {
      alert("Page must be a positive number");
      return;
    }
    const parsedYear = parseInt(pubYear, 10);
    if (isNaN(parsedYear) || pubYear.length !== 4) {
      alert("Publication year must be a valid 4-digit year");
      return;
    }

    const data = {
      title,
      author,
      page: parseInt(page, 10),
      pubYear: parsedYear,
    };

    setLoading(true);
    axios
      .post(`http://localhost:5050/books`, data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Success!", { variant: "success" });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error has occurred. Find more info in the console");
        enqueueSnackbar("Error", { variant: "error" });
        console.log("Error:", err.response ? err.response.data : err.message);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create a new book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-gray-700 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-200">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full bg-gray-800 text-white"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-200">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full bg-gray-800 text-white"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-200">Pages</label>
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full bg-gray-800 text-white"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-200">Year</label>
          <input
            type="text"
            value={pubYear}
            onChange={(e) => setPubYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full bg-gray-800 text-white"
          />
        </div>
        <button className="p-2 bg-gray-700 m-8" onClick={handleSaveBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateBook;
