import { Link } from "react-router-dom";
import { FaCat } from "react-icons/fa";

const Header = () => {
  return (
    <section className="header">
      <div className="header-menu">
        <div className="header-left">
          <FaCat className="cat-icon" />
          <p className="header-title">Cat Race Finder</p>
        </div>

        <div className="header-right">
          <ul className="header-links">
            <li>
              <Link to="/" className="header-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/search" className="header-link">
                Search
              </Link>
            </li>
            <li>
              <a href="/" className="header-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Header;
