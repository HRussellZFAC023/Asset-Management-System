import React from "react";
import PropTypes from "prop-types";

const UsersList = props => {
  return (
    <div>
      {props.users.map(user => {
        return (
          <div key={user.id} className="box title is-4 username">
            <span>{'Id: ' + user.id}</span>
            <br />
            <span>{'Username: ' + user.username}</span>
            <br />
            <span>{'Email: ' + user.email}</span>
          </div>
        );
      })}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;
