import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BookSingleCard = ({ book }) => {
  return (
    <div
      key={book._id}
      className="border-2 border-gray-500 px-4 py-2 m-4 relative hover:shadow-x1"
    >
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.pubYear}
      </h2>
      <h4 className="my-2 text-gray-500">
        {book._id}
        <div className="flex justify-start books-center gap-x-2">
          <PiBookOpenTextLight className="text-red-300 text-2x1" />
          <h2 className="my-1">{book.title}</h2>
          <div className="flex justify-start books-center">
            <BiUserCircle className="text-red-300 text-2x1" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <div className="flex justify-between books-center gap-x-2 mt-4 p-4">
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className="text-2x1 text-green-800" />
            </Link>

            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-2x1 text-yellow-600 hover:text-black" />
            </Link>

            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-2x1 text-red-600 hover:text-black" />
            </Link>
          </div>
        </div>
      </h4>
    </div>
  );
};

export default BookSingleCard;
