import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const ControlPanel = () => {
  return (
    <div>
        <h1>CONTROL PANEL</h1>
        <p>Choose an option</p>
        <nav>
            <ul>
                <li>
                    <NavLink to="/panel/home">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/create-product">Create product</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/manage-users">Manage users</NavLink>
                </li>
                <li>
                    <NavLink to="/panel/about">About</NavLink>
                </li>
            </ul>
        </nav>

        {/* used to tell main router where the nested routes will be displayed */}
        <div>
            <Outlet />
        </div>
    </div>
  )
}
