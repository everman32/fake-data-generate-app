import React from "react";
import PropTypes from "prop-types";

function SortIndicator({ isSorted, isSortedDesc }) {
  const getSortStatus = () => {
    if (isSortedDesc) return " 🔽";
    if (isSorted) return " 🔼";
    return "";
  };
  return <span>{getSortStatus()}</span>;
}

SortIndicator.propTypes = {
  isSorted: PropTypes.bool.isRequired,
  isSortedDesc: PropTypes.bool,
};

SortIndicator.defaultProps = {
  isSortedDesc: undefined,
};

export default SortIndicator;
