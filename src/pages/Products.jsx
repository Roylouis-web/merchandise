import { NavLink, Outlet } from "react-router-dom";

export default function Products() {
  return (
    <div className="products-container">
        <div className="sidebar-container">
            <nav className="sidebar">
            <h4 className="sidebar-h1">Categories</h4>
                <NavLink 
                    to='.'
                    end
                    style={({ isActive }) => isActive ? { background: 'whitesmoke', borderLeft: '5px solid orange' } : null}
                >
                    Grocery
                </NavLink>
                <NavLink 
                    to='phones'
                    end
                    style={({ isActive }) => isActive ? { background: 'whitesmoke', borderLeft: '5px solid orange' } : null}
                >
                   Phones and Tablets
                </NavLink>
                <NavLink 
                    to='computing'
                    end
                    style={({ isActive }) => isActive ? { background: 'whitesmoke', borderLeft: '5px solid orange' } : null}
                >
                    Computing
                </NavLink>
                <NavLink 
                    to='electronics'
                    end
                    style={({ isActive }) => isActive ? { background: 'whitesmoke', borderLeft: '5px solid orange' } : null}
                >
                    Electronics
                </NavLink>
            </nav>
        </div>
        <Outlet />
    </div>
  );
};