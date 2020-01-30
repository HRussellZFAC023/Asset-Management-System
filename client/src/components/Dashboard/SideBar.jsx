import React from "react";
import { Link } from "react-router-dom";

const Sidebar = props => {
  return (
    <div>
      <aside className="menu is-hidden-mobile">
        <p className="menu-label">
          General
        </p>
        <ul className="menu-list">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li>Settings</li>
          <li>Other</li>
        </ul>
        <p className="menu-label">
          Asset Management
        </p>
        <ul className="menu-list">
          <li><Link to="/dashboard/users">Users</Link></li>
          <li>Types</li>
          <li>Assets</li>
        </ul>
      </aside>
    </div>
  )
}

export default Sidebar;
