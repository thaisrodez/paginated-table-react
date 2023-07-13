import React from "react";
import {
  ChevronUpDownIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

/**
 * Table
 * @component
 * @example
 * const data = [{name: 'Bob'}, {name: 'Sam'}]
 * const tableHeaders = [{key: 'name', title:'Name'}]
 * const sorting = 'asc'
 * const setSorting = useState('none')[1]
 * const handleAscSorting = () => {}
 * const handleDescSorting = () => {}
 * return (
 * <Table data={data} tableHeaders={tableHeaders} sorting={sorting} setSorting={setSorting} handleAscSorting={handleAscSorting} handleDescSorting={handleDescSorting}/>
 * )
 */
export function Table({
  data,
  tableHeaders,
  sorting,
  setSorting,
  handleAscSorting,
  handleDescSorting,
}) {
  return (
    <table className="w-full border-y-2">
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header.key} className="py-4 ">
              <div className="flex items-center">
                {sorting === "none" && (
                  <button
                    onClick={() => {
                      setSorting("desc");
                    }}
                  >
                    <ChevronUpDownIcon className="w-6 h-6" />
                  </button>
                )}
                <div className="flex flex-col items-center">
                  {sorting === "asc" && (
                    <button
                      onClick={() => {
                        handleAscSorting(header.key);
                      }}
                    >
                      <ChevronUpIcon className="w-3 h-3" />
                    </button>
                  )}
                  {sorting === "desc" && (
                    <button
                      onClick={() => {
                        handleDescSorting(header.key);
                      }}
                    >
                      <ChevronDownIcon className="w-3 h-3" />
                    </button>
                  )}
                </div>
                {header.title}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="border-y-2">
        {data.map((item, index) => (
          <tr
            key={item.id}
            className={`${index % 2 === 0 ? "bg-slate-100" : ""} border-y`}
          >
            <td className="p-2">{item.firstname}</td>
            <td className="p-2">{item.lastname}</td>
            <td className="p-2">{item.startDate.toString()}</td>
            <td className="p-2">{item.department}</td>
            <td className="p-2">{item.dateOfBirth.toString()}</td>
            <td className="p-2">{item.street}</td>
            <td className="p-2">{item.city}</td>
            <td className="p-2">{item.state}</td>
            <td className="p-2">{item.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  tableHeaders: PropTypes.arrayOf(PropTypes.object),
  sorting: PropTypes.oneOf(["asc", "desc", "none"]),
  setSorting: PropTypes.func,
  handleAscSorting: PropTypes.func,
  handleDescSorting: PropTypes.func,
};
