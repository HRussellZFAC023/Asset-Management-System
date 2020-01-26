import React from "react";
import PropTypes from "prop-types";

const UsersList = props => {
  return (
    <div>
      {props.users.map(user => {
        return (
          <div key={user.id} className="box title is-4 username">
            <span>{'Username: '}
            <p className="username">{user.username}</p></span>
            <br/> {'Email: ' + user.email}
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
