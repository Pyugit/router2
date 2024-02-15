import { NavLink ,Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <h1>Router nested v6</h1>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/post"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "grey" : "" };
            }}
          >
            Post
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
