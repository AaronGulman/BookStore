import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner } from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

export const Home = () => {
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
	
  )
};
