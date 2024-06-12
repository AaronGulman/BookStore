import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import BooksTable from "../components/home/BooksTable.jsx";
import BooksCard from "../components/home/BooksCard.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5050/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4 dark:bg-dark-bg dark:text-dark-text min-h-screen">
      <div className="flex justify-center items-center gap-x-4 mb-4">
        <button
          className="bg-dark-primary hover:bg-dark-secondary px-4 py-1 rounded-lg text-white"
          onClick={() => setShowType("table")}
        >
          Table
        </button>
        <button
          className="bg-dark-primary hover:bg-dark-secondary px-4 py-1 rounded-lg text-white"
          onClick={() => setShowType("card")}
        >
          Card
        </button>
      </div>
      <h1 className="text-3xl my-8">Book List</h1>
      <Link to="/books/create">
        <MdOutlineAddBox className="text-dark-primary text-4xl mb-4" />
      </Link>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <BooksTable books={books} />
      ) : (
        <BooksCard books={books} />
      )}
    </div>
  );
};

export default Home;
