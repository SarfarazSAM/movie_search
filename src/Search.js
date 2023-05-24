import { useState } from "react";
// import { Form, Button } from "react-bootstrap";
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
    // <Form>
    //   <Form.Group className="row mt-5 mb-4 justify-content-center">
    //     <Form.Control
    //       className="w-auto"
    //       type="text"
    //       value={searchValue}
    //       onChange={searchInput}
    //     />
    //     <Button
    //       className="col-2 col-sm-2 col-md-1 col-lg-1"
    //       type="submit"
    //       onClick={searchFunction}
    //     >
    //       search
    //     </Button>
    //   </Form.Group>
    // </Form>

    // <div class="container">
    //   <form class="form-inline my-4 justify-content-center">
    //     <input
    //       class="form-control mr-sm-2"
    //       type="search"
    //       placeholder="Search"
    //       value={searchValue}
    //       onChange={searchInput}
    //     />
    //     <button
    //       class="btn btn-primary my-2 my-sm-0"
    //       type="submit"
    //       onClick={searchFunction}
    //     >
    //       Search
    //     </button>
    //   </form>
    // </div>

    <div class="container">
      <form class="form-inline my-4 justify-content-center">
        <div class="input-group">
          <input
            class="form-control"
            type="search"
            placeholder="Search"
            value={searchValue}
            onChange={searchInput}
          />
          <div class="input-group-append">
            <button
              class="btn btn-primary"
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
