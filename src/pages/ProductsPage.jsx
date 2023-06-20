import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
    return (
      <div className="sidebar-container">
          <nav className="sidebar">
              <h4>Categories</h4>
              <NavLink
                to="."
                end
                style={({ isActive }) => isActive ? { color: "red" } : null}
              >
                  Grocery
              </NavLink>
              <NavLink
                to="phones-and-tablets"
                style={({ isActive }) => isActive ? { color: "red" } : null}
              >
                  Phones and Tablets
              </NavLink>
              <NavLink
                to="computing"
                style={({ isActive }) => isActive ? { color: "red" } : null}
              >
                  Computing
              </NavLink>
              <NavLink
                to="electronics"
                style={({ isActive }) => isActive ? { color: "red" } : null}
              >
                  Electronics
              </NavLink>
          </nav>
          <Outlet />
      </div>
    );
  };