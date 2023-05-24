import React from "react";
import { Card } from "react-bootstrap";

const defaultImg =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster = movie.Poster === "N/A" ? defaultImg : movie.Poster;
  return (
    <Card>
      <Card.Img
        className="custom-card-img"
        src={poster}
        alt={`Poster not available: ${movie.Title}`}
        width="180"
      />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>({movie.Year})</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Movie;
