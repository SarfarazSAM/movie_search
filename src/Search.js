import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("man");

  const searchInput = (e) => {
    setSearchValue(e.target.value);
  };

  // const resetInputFeild = () => {
  //   setSearchValue("");
  // };

  const searchFunction = (e) => {
    e.preventDefault();
    search(searchValue);
    // resetInputFeild();
  };

  return (
    <div className="container search-container">
      <form className="form-inline my-4 justify-content-center">
        <div className="input-group">
          <input
            className="form-control"
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={searchInput}
          />
          <div className="input-group-append">
            <button
              className="search-btn btn btn-primary"
              type="submit"
              onClick={searchFunction}
            >
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Search;
