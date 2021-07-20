import React from "react";
import PropTypes from "prop-types";

const Caption = ({ text }) => <span>{text}</span>;

Caption.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Caption;
