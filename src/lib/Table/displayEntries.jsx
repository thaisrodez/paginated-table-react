import React from "react";
import PropTypes from "prop-types";

const NUMBER_OF_ENTRIES = [10, 25, 50, 100];

/**
 * React component indicating the extend of data displayed
 * @component
 * @example
 * const setRowsPerPage = useState(10)[1]
 * return (
 * <RowsPerPage setRowsPerPage={setRowsPerPage} />
 * )
 */
export function RowsPerPage({ setRowsPerPage }) {
  /**
   * Set the number of rows per page
   * @param {React.ChangeEvent<HTMLSelectElement>} e
   */
  const onChange = (e) => {
    setRowsPerPage(parseInt(e.target.value));
  };

  return (
    <div className="flex space-x-2 items-center w-1/6">
      <p>Show</p>
      <select name="entries" id="entries" className="input" onChange={onChange}>
        {NUMBER_OF_ENTRIES.map((number) => (
          <option key={number} value={number}>
            {number}
          </option>
        ))}
      </select>
      <p>entries</p>
    </div>
  );
}

RowsPerPage.propTypes = {
  setRowsPerPage: PropTypes.func,
};
