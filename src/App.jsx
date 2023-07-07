import React from 'react'
import { Table } from './lib'
import { mockEmployees, tableHeaders } from './data/mockData'

const App = () => {
  return (
    <Table data={mockEmployees} tableHeaders={tableHeaders}/>
  )
}

export default App
