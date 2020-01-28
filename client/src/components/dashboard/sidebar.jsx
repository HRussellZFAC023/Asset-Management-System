import React from "react";
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import Users from './asset-management/users'

const Sidebar = props => {
  let { path, url } = useRouteMatch();
  return (
    <div>
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
          <li><Link to={`${url}/users`}>Users</Link></li>
          <li>Types</li>
          <li>Assets</li>
        </ul>
      </aside>

      <Switch>
        <Route path={`${path}/:users`} component={Users}/>
      </Switch>
    </div>
  )
}

export default Sidebar;
