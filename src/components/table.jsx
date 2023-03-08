import React, { useCallback } from "react";
import { useTable, useSortBy } from "react-table";
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from "prop-types";
import TableHeader from "./table-header";
import TableCell from "./table-cell";

function Table({ columns, data, update }) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    );

  const handleUpdate = useCallback(() => {
    update();
  }, [update]);

  return (
    <InfiniteScroll
      dataLength={rows.length}
      next={handleUpdate}
      hasMore
      loader={<h4>Is loading...</h4>}
    >
      <table {...getTableProps()}>
        <thead>
          {headerGroups.length > 0 &&
            headerGroups.map((headerGroup) => (
              <TableHeader
                key={headerGroup.getHeaderGroupProps().key}
                headerGroup={headerGroup}
              />
            ))}
        </thead>

        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr key={row.id} {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <TableCell key={cell.column.id} cell={cell} />
                ))}
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
