import Header from "./Header";
import Search from "./Search";
import Movie from "./Movie";
import Footer from "./Footer";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    setTimeout(() => {
      searchMovies("man");
    }, 300);
  }, []);

  const search = (searchValue) => {
    setLoading(true);
    searchMovies(searchValue);
    setErrMessage(null);
  };

  const searchMovies = (searchValue) => {
    fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=83805b5`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
          console.log(data.Search);
          setLoading(false);
        } else {
          setErrMessage(data.Error);
          setLoading(false);
        }
      });
    const newFeature = () => {
      console.log("welcome to the application");
    };
    newFeature();
  };
  return (
    <div className="App">
      <Header text="Movie Search" />
      <Search search={search} />
      <p>
        <b>Sharing a few of our favourites</b>
      </p>
      <div className="container">
        <div className="row justify-content-center">
          {loading && !errMessage ? (
            <b>loading...</b>
          ) : errMessage ? (
            <b>{errMessage}</b>
          ) : (
            movies &&
            movies.length > 0 &&
            movies.map((movie, index) => (
              <div
                className="col-9 col-sm-6 col-md-4 col-lg-3 p-4"
                key={`${index}-${movie.Title}`}
              >
                <Movie movie={movie} />
              </div>
            ))
          )}
        </div>
      </div>
      <Footer text="This is a simple Bootstrap footer." />
    </div>
  );
}

export default App;
