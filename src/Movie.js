import React from "react";

const defaultImg =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? defaultImg : movie.Poster;
  return (
    <div className="movie">
      <div className="img">
        <img src={poster} alt={`Poster not available: ${movie.Title}`} />
      </div>
      <h4>{movie.Title}</h4>
      <p>({movie.Year})</p>
      <p>({movie.Year})</p>
    </div>
  );
};

export default Movie;
