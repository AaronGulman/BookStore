import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <table className="w-full border-collapse overflow-hidden rounded-lg shadow-lg">
      <thead>
        <tr className="bg-dark-card text-dark-text">
          <th className="px-4 py-2 border border-dark-border">No</th>
          <th className="px-4 py-2 border border-dark-border">Title</th>
          <th className="px-4 py-2 border border-dark-border max-md:hidden">
            Author
          </th>
          <th className="px-4 py-2 border border-dark-border max-md:hidden">
            Year
          </th>
          <th className="px-4 py-2 border border-dark-border">Operations</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <tr key={book._id} className="bg-dark-bg even:bg-dark-card">
            <td className="px-4 py-2 border border-dark-border text-center">
              {index + 1}
            </td>
            <td className="px-4 py-2 border border-dark-border text-center">
              {book.title}
            </td>
            <td className="px-4 py-2 border border-dark-border text-center max-md:hidden">
              {book.author}
            </td>
            <td className="px-4 py-2 border border-dark-border text-center max-md:hidden">
              {book.pubYear}
            </td>
            <td className="px-4 py-2 border border-dark-border text-center">
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
  );
};

export default BooksTable;
