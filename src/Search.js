import { useState } from "react";

const Search = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

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
    <form className="search">
      <input type="text" value={searchValue} onChange={searchInput} />
      <input type="submit" value="search" onClick={searchFunction} />
    </form>
  );
};

export default Search;
