import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <aside className="menu is-hidden-mobile">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li>Dashboard</li>
          <li>Assets</li>
          <li>Types</li>
          <li>Other</li>
        </ul>
        <p className="menu-label">
          Administration
        </p>
        <ul className="menu-list">
          <li>Users</li>
          <li>Add/Remove a Type</li>
          <li>Remove an Asset</li>
        </ul>
        <p className="menu-label">
          Assets
        </p>
        <ul className="menu-list">
          <li>Your Assets</li>
          <li>Create an Asset</li>
          <li>Update an Asset</li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
