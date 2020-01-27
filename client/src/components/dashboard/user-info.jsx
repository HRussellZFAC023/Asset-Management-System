import React from "react";
import PropTypes from "prop-types";

const UserInfo = props => {
  return (
    <div className="tile is-parent">
      <article className="tile is-child box">
        <p className="title">{props.users.length}</p>
        <p className="subtitle">Users</p>
      </article>
    </div>
  )
}

UserInfo.propTypes = {
  users: PropTypes.array.isRequired
}

export default UserInfo;
