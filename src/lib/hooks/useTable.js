import { useEffect, useState } from "react";
import {
  getIndexes,
  getNumberOfPages,
  getPageRange,
  getSlicedData,
  searchThroughObject,
} from "../../utils/utils";

/**
 * Custom hook to handle table actions
 * @param {object[]} data Data to displayed in the table
 * @param {number} page Current page displayed
 * @param {number} rowsPerPage Number of rows displayed per page
 * @param {string} searchInput Search input
 * @param {"asc" | "desc" | "none"} sorting Type of sorting
 * @param {string} sortingKey Key sorted on
 * @returns
 */
export const useTable = (
  data,
  page,
  rowsPerPage,
  searchInput,
  sorting,
  sortingKey
) => {
  const [pageRange, setPageRange] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [numberOfPages, setNumberOfPages] = useState(
    getNumberOfPages(data, rowsPerPage)
  );
  const [indexes, setIndexes] = useState(getIndexes(page, rowsPerPage));
  const [totalOfRows, setTotalOfRows] = useState(data.length);

  useEffect(() => {
    const range = getPageRange(numberOfPages);
    setPageRange([...range]);

    const currentIndexes = getIndexes(page, rowsPerPage);
    setIndexes({ ...currentIndexes });

    let result = getSlicedData(data, page, rowsPerPage);
    let currentNumberOfPages = getNumberOfPages(data, rowsPerPage);
    let currentTotalOfRows = data.length;

    if (searchInput.length > 0) {
      const searchResult = data.filter((obj) =>
        searchThroughObject(obj, searchInput)
      );
      currentNumberOfPages = getNumberOfPages(searchResult, rowsPerPage);
      currentTotalOfRows = searchResult.length;
      result = getSlicedData(searchResult, page, rowsPerPage);
    }
    if (sortingKey.length > 0 && sorting === "asc") {
      result = result.sort((a, b) =>
        b[sortingKey]
          .toString()
          .localeCompare(a[sortingKey].toString())
      );
    } else if (sortingKey.length > 0 && sorting === "desc") {
      result = result.sort((a, b) =>
        a[sortingKey]
          .toString()
          .localeCompare(b[sortingKey].toString())
      );
    }
    setTotalOfRows(currentTotalOfRows);
    setNumberOfPages(currentNumberOfPages);
    setPaginatedData(result);
  }, [
    data,
    rowsPerPage,
    page,
    numberOfPages,
    searchInput,
    sorting,
    sortingKey,
  ]);

  return { paginatedData, pageRange, numberOfPages, indexes, totalOfRows };
};
