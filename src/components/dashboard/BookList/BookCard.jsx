import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineDotsCircleHorizontal } from "react-icons/hi";
import { useState } from "react";
import BookDropdownMenu from "../../others/BookDropdownMenu";

const BookCard = ({ book }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const bookHandler = () => {
    navigate(`/book/${book._id}/`);
  };

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const goAndUpdateBook = (id) => {
    navigate(`/book/update/${id}`);
  };
  return (
    <div class="flex relative flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl  ">
      <HiOutlineDotsCircleHorizontal
        className="absolute top-[6px] right-[6px]"
        onClick={toggleMenu}
      />
      {showMenu && (
        <div className="absolute top-[20px] right-[20px]">
          <div className="w-[120px] p-[10px] bg-gray-50 absolute top-0 right-0 shadow-2xl rounded-md">
            <ul className="">
              <li onClick={() => goAndUpdateBook(book._id)}>Edit book</li>
              <li>Delete book</li>
            </ul>
          </div>
        </div>
      )}
      <img
        class="object-cover w-[100px] h-full  rounded-t-lg md:rounded-none md:rounded-l-lg"
        src={book.bookImageURL}
        alt=""
      />
      <div
        onClick={bookHandler}
        class="flex flex-col cursor-pointer justify-between p-4 leading-normal"
      >
        <h5 class="mb-2 text-lg font-bold tracking-tight text-gray-900 ">
          {book.name}
        </h5>
      </div>
    </div>
  );
};

export default BookCard;
