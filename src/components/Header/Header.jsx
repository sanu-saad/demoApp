import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <div>
        <Link to="/">
          <h2>Router-Dom</h2>
        </Link>
      </div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
