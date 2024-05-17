// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

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
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        <Link to="/books/create">
          <MdOutlineAddBox className="text-sky-800 text-4xl" />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse overflow-hidden rounded-lg shadow-lg">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 border border-gray-300 rounded-tl-lg">No</th>
                <th className="px-4 py-2 border border-gray-300">Title</th>
                <th className="px-4 py-2 border border-gray-300 max-md:hidden">Author</th>
                <th className="px-4 py-2 border border-gray-300 max-md:hidden">Year</th>
                <th className="px-4 py-2 border border-gray-300 rounded-tr-lg">Operations</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book, index) => (
                <tr key={book._id} className="bg-white even:bg-gray-100">
                  <td className="px-4 py-2 border border-gray-300 text-center">{index + 1}</td>
                  <td className="px-4 py-2 border border-gray-300 text-center">{book.title}</td>
                  <td className="px-4 py-2 border border-gray-300 text-center max-md:hidden">{book.author}</td>
                  <td className="px-4 py-2 border border-gray-300 text-center max-md:hidden">{book.pubYear}</td>
                  <td className="px-4 py-2 border border-gray-300 text-center">
                    <div className="flex justify-center gap-x-4">
                      <Link to={`/books/details/${book._id}`}>
                        <BsInfoCircle className="text-2xl text-green-800" />
                      </Link>
                      <Link to={`/books/edit/${book._id}`}>
                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                      </Link>
                      <Link to={`/books/delete/${book._id}`}>
                        <MdOutlineDelete className="text-2xl text-red-600" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Home;
