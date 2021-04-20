import Header from "../header";
import { useRef } from "react";
import { useGlobalContext } from "../context";
import { Link } from "react-router-dom";
const Search = () => {
  return (
    <div className="container">
      <Header />

      <div className="search-choice">
        <Link to={"/search/search-by-name"}>
          <div className="search search-by-name">
            <p>Search by Cat name</p>
            <i className="fas fa-list-ul"></i>
          </div>
        </Link>

        <Link to={"/search/search-by-values"}>
          <div className="search search-by-values">
            <p>Specific Search</p>
            <i className="fas fa-search"></i>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Search;
