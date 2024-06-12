import { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import BackButton from "../components/BackButton.jsx";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const EditBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [page, setPage] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5050/books/${id}`)
      .then((res) => {
        setAuthor(res.data.author);
        setPubYear(res.data.pubYear.toString());
        setPage(res.data.page);
        setTitle(res.data.title);
        enqueueSnackbar("Editing - Success!", { variant: "success" });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.error(err);
      });
  }, [id, enqueueSnackbar]);

  const handleEditBook = () => {
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
      .put(`http://localhost:5050/books/${id}`, data)
      .then(() => {
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        alert("An error has occurred. Find more info in the console");
        console.log("Error:", err.response ? err.response.data : err.message);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Pages</label>
          <input
            type="number"
            value={page}
            onChange={(e) => setPage(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Year</label>
          <input
            type="text"
            value={pubYear}
            onChange={(e) => setPubYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditBook;
