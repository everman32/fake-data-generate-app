import React from "react";
import PropTypes from "prop-types";
import SortIndicator from "./sort-indicator";

function TableHeader({ headerGroup }) {
  const { headers } = headerGroup;

  return (
    <tr {...headerGroup.getHeaderGroupProps()}>
      {headers.map((column) => (
        <th
          key={column.id}
          {...column.getHeaderProps(column.getSortByToggleProps())}
        >
          {column.render("Header")}
          <SortIndicator
            isSorted={column.isSorted}
            isSortedDesc={column.isSortedDesc}
          />
        </th>
      ))}
    </tr>
  );
}

TableHeader.propTypes = {
  headerGroup: PropTypes.shape({
    headers: PropTypes.arrayOf(
      PropTypes.shape({
        getHeaderProps: PropTypes.func.isRequired,
        getSortByToggleProps: PropTypes.func.isRequired,
        render: PropTypes.func.isRequired,
        isSorted: PropTypes.bool,
        isSortedDesc: PropTypes.bool,
      }).isRequired
    ).isRequired,
    getHeaderGroupProps: PropTypes.func.isRequired,
  }).isRequired,
};

export default TableHeader;
