import React, { useState, useEffect } from 'react'
import { RowsPerPage } from './displayEntries'
import { SearchEntries } from './searchEntries'
import { Table } from './table'
import { useTable } from '../hooks/useTable'
import { Pagination } from './pagination'
import { DisplayedRows } from './displayedRows'
import PropTypes from 'prop-types';

/**
 * Main table component displaying table and handling table functionalities
 * @component
 * @example
 * const data = [{name: 'Bob'}, {name: 'Sam'}]
 * const tableHeaders = [{key: 'name', title:'Name'}]
 * return (
 * <FullTable data={data} tableHeaders={tableHeaders} />
 * )
 */
export default function FullTable({ data, tableHeaders }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  const [searchInput, setSearchInput] = useState('')
  const [sorting, setSorting] = useState('none')
  const [sortingKey, setSortingKey] = useState('')
  const [filteredPaginatedData, setFilterPaginatedData] = useState([])
  const { paginatedData, pageRange, numberOfPages, indexes, totalOfRows } = useTable(data, currentPage, rowsPerPage, searchInput, sorting, sortingKey)

  useEffect(() => {
    setFilterPaginatedData(paginatedData)
  }, [paginatedData])

  const handleDescSorting = (key) => {
    setSortingKey(key)
    setSorting('asc')
  }

  const handleAscSorting = (key) => {
    setSortingKey(key)
    setSorting('desc')
  }

  return (
    <div className='space-y-8 px-12'>
      <div className='flex justify-between'>
        <RowsPerPage setRowsPerPage={setRowsPerPage} />
        <SearchEntries searchInput={searchInput} setSearchInput={setSearchInput} />
      </div>
      <Table
        data={filteredPaginatedData}
        tableHeaders={tableHeaders}
        sorting={sorting}
        setSorting={setSorting}
        handleAscSorting={handleAscSorting}
        handleDescSorting={handleDescSorting}
      />
      <div className='flex items-center justify-between'>
        <DisplayedRows indexes={indexes} totalOfRows={totalOfRows} />
        <Pagination
          pageRange={pageRange}
          numberOfPages={numberOfPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}

FullTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  tableHeaders: PropTypes.arrayOf(PropTypes.object)
}
