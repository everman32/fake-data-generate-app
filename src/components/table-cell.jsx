import React from "react";
import PropTypes from "prop-types";

function TableCell({ cell }) {
  return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
}

TableCell.propTypes = {
  cell: PropTypes.shape({
    getCellProps: PropTypes.func.isRequired,
    render: PropTypes.func.isRequired,
  }).isRequired,
};

export default TableCell;
