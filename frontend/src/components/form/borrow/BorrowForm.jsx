import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";
import React, { useContext, useState } from "react";
import addBorrowRecord from "../../../features/borrowRecord/actions/addBorrowRecord.js";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../../context/AuthContext.jsx";
import ErrorAlert from "../../alert/ErrorAlert.jsx"

export default function BorrowForm({ book }) {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.borrowRecords);
  const [showError, setShowError] = useState(false); // State to control error visibility

  const today = new Date();
  const borrowDate = today.toISOString().split("T")[0];

  const returnDate = new Date(today);
  returnDate.setDate(today.getDate() + 7);
  const formattedReturnDate = returnDate.toISOString().split("T")[0];

  const handleBorrow = () => {
    const borrowRecord = {
      userId: user.id,
      bookId: book.id,
      status: "BORROWED",
      borrowDate: `${borrowDate}T00:00:00`,
      returnDate: `${formattedReturnDate}T00:00:00`,
    };
    dispatch(addBorrowRecord(borrowRecord))
      .unwrap()
      .catch(() => setShowError(true)); // Show error if the action fails
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl font-[poppins] border-[0.5px] border-[#ccc]">
      <figure className="w-1/4 flex-shrink-0">
        <img
          src={`/storage/${book.cover}`}
          alt="Book Cover"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body flex-grow">
        <h2 className="card-title text-4xl">{book.title}</h2>
        <p className="text-justify font-medium">{book.description}</p>

        <div className="card-actions flex items-center justify-end">
          <p>
            <span className="badge badge-outline badge-primary">{book.category}</span> -
            <span className="font-bold"> {book.author}</span>
          </p>
          <p className="flex gap-2">
            <input
              type="date"
              value={borrowDate}
              className="input input-bordered input-sm w-full max-w-xs"
              readOnly
            />
            <input
              type="date"
              value={formattedReturnDate}
              className="input input-bordered input-sm w-full max-w-xs"
              readOnly
            />
          </p>
          <button
            className="btn btn-sm btn-success font-bold flex items-center"
            onClick={handleBorrow}
            disabled={loading}
          >
            <FaCheck className="size-4" />
            {loading ? "Processing..." : "Confirm Borrow"}
          </button>
        </div>
      </div>

      {/* Render the ErrorAlert if showError is true */}
      {showError && (
        <ErrorAlert
          message="An Error Occurred During Action. Please Try Again!"
          onClose={() => setShowError(false)}
        />
      )}
    </div>
  );
}