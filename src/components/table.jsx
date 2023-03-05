import React from "react";
import { useTable, useSortBy } from "react-table";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";

function Table({ columns, data, update }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { sortBy },
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  React.useEffect(() => {
    console.log("sort");
  }, [sortBy]);

  return (
    <InfiniteScroll
      dataLength={rows.length}
      next={update}
      hasMore
      loader={<h4>Loading more 20 items...</h4>}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </InfiniteScroll>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.string.isRequired,
      accessor: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  update: PropTypes.func.isRequired,
};

export default Table;
