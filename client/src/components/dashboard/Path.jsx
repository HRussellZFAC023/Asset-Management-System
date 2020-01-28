import React from "react";
import PropTypes from "prop-types";

const CurrentPath = props => {
  return (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li> {props.zone} </li>
        <li className="is-active">{props.path}</li>
      </ul>
    </nav>
  )
}

CurrentPath.propTypes = {
  zone: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
}

export default CurrentPath;
