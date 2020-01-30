import React from "react";
import PropTypes from "prop-types";

const UsernamesTable = props => {
  return (
    <div className="card-table">
      <div className="content">
        <table className="table is-fullwidth is-striped">
          <tbody>
            <tr>
              <td width="5%" />
              <td>Email</td>
              <td className="level-right">Username</td>
            </tr>
            {props.users.map(user => {
              return (
                <tr key={user.id}>
                  <td width="5%"><i className="fa fa-bell-o" /></td>
                  <td>{user.email}</td>
                  <td className="level-right">{user.username}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

UsernamesTable.propTypes = {
  users: PropTypes.array.isRequired
}

export default UsernamesTable;
