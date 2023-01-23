import Header from "./Header";
import Search from "./Search";
import Movie from "./Movie";
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
  };
  return (
    <div className="App">
      <Header text="Movie Search" />
      <Search search={search} />
      <p className="intro">Sharing a few of our favourites</p>
      <div className="movies">
        {loading && !errMessage ? (
          <span>loading...</span>
        ) : errMessage ? (
          <div className="errorMessage">{errMessage}</div>
        ) : (
          movies &&
          movies.length > 0 &&
          movies.map((movie, index) => (
            <Movie key={`${index}-${movie.Title}`} movie={movie} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
