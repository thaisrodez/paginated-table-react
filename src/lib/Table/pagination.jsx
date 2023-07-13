import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import PropTypes from "prop-types";

/**
 * React component for pagination
 * @component
 * @example
 * const pageRange = [1, 2, 3]
 * const numberOfPages = 3
 * const currentPage = 2
 * const setCurrentPage = useState(2)[1]
 * return (
 * <Pagination pageRange={pageRange} numberOfPages={numberOfPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
 * )
 */
export function Pagination({
  pageRange,
  numberOfPages,
  currentPage,
  setCurrentPage,
}) {
  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage !== numberOfPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <nav className="flex justify-center">
      <ul className="flex space-x-4 items-center">
        <li>
          <button
            onClick={handlePreviousPage}
            className="border border-gray-400 rounded-lg p-2"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
        </li>
        {pageRange.map((n, index) => (
          <li
            key={index}
            className={`${currentPage === n ? "text-blue-500" : ""} text-xl`}
          >
            <button
              onClick={() => {
                setCurrentPage(n);
              }}
            >
              {n}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={handleNextPage}
            className="border border-gray-400 rounded-lg p-2"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  pageRange: PropTypes.arrayOf(PropTypes.number),
  numberOfPages: PropTypes.number,
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
};
