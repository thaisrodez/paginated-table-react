# Pagintated Table For React

A paginated table component for React project.
Display data in a paginated table.
With this package you can search through your data and sort your data.

## Authors

- [@thaisrodez](https://github.com/thaisrodez)

## Features

- Table layout with custom headers
- Pagination
- Select number of rows per page
- Search through data

## Installation

### Prerequisites

- [NodeJS (**version 18**)](https://nodejs.org/en/)

### Installation

Install paginated-table-react-pkg with npm

```bash
  npm install paginated-table-react-pkg
```

### Configuration

Package is using TailwindCSS. Specify in Tailwind config file :

```javascript
content: [
    "./node_modules/paginated-table-react-pkg/**/*.{html,js, jsx}"
  ],
```

## Usage/Examples

```javascript
import { Table } from "paginated-table-react-pkg";

function App() {
  <Table data={data} tableHeaders={tableHeaders} />;
}
```
