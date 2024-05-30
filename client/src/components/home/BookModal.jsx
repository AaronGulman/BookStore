import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { PiBookOpenTextLight } from "react-icons/pi";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        <AiOutlineClose
          className="absolute right-6 text-3xl text-red-600 cursor-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          {book.pubYear}
        </h2>
        <div className="my-2 text-gray-500">
          <div className="flex items-center gap-x-2">
            <PiBookOpenTextLight className="text-red-300 text-2xl" />
            <h2 className="my-1">{book.title}</h2>
          </div>
          <div className="flex items-center gap-x-2 mt-2">
            <BiUserCircle className="text-red-300 text-2xl" />
            <h2 className="my-1">{book.author}</h2>
          </div>
          <p className="mt-4">Show here</p>
          <p className="my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            similique ipsum perspiciatis ea officia consectetur sequi
            blanditiis aperiam tenetur, voluptatibus sed aliquam sit
            reprehenderit quia tempore molestiae molestias, itaque a!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
