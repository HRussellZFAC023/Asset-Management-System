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
          <li>Settings</li>
          <li>Other</li>
        </ul>
        <p className="menu-label">
          Asset Management
        </p>
        <ul className="menu-list">
          <li>Users</li>
          <li>Types</li>
          <li>Assets</li>
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
