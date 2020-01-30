import React from "react";
import PropTypes from "prop-types";

const UsersList = props => {
  return (
    <div>
      {props.users.map(user => {
        return (
          <div key={user.id} className="box">
            <div className="columns is-vcentered">
              <div className="column is-9">
                <span><b>Username: </b>{user.username}</span>
                <br />
                <span><b>Email: </b>{user.email}</span>
              </div>
              <div className="column is-3">
                <button className="button is-danger is-fullwidth" onClick={() => props.delete(user.id)}>
                  <span>Delete</span>
                  <span className="icon is-small">
                    <i className="fa fa-times" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

UsersList.propTypes = {
  users: PropTypes.array.isRequired,
  delete: PropTypes.func.isRequired
};

export default UsersList;
