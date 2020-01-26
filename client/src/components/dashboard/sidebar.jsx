import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <aside class="menu is-hidden-mobile">
        <p class="menu-label">
          General
        </p>
        <ul class="menu-list">
          <li>Dashboard</li>
          <li>Assets</li>
          <li>Types</li>
          <li>Other</li>
        </ul>
        <p class="menu-label">
          Administration
        </p>
        <ul class="menu-list">
          <li>Settings</li>
          <li>Users
            <ul>
              <li>Find a User</li>
              <li>Change User Permissions</li>
              <li>Add a User</li>
              <li>Remove a User</li>
            </ul>
          </li>
          <li>Add/Remove a Type</li>
          <li>Remove an Asset</li>
        </ul>
        <p class="menu-label">
          Assets
        </p>
        <ul class="menu-list">
          <li>Your Assets</li>
          <li>Create an Asset</li>
          <li>Update an Asset</li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
