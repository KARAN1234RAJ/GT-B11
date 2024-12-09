import React, { useEffect, useState } from "react";
import data from "./data.json";
// import { Button } from 'reactstrap';
import { Card, CardBody, CardTitle, CardText, CardSubtitle } from "reactstrap";

const MoviesList = () => {
  console.log(data);

  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    setMoviesList(data.movies);
  });
  console.log(moviesList.length);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Movies List...</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        {moviesList.map((movie) => (
          <Card
            style={{
              width: "18rem",
              display: "flex",
            }}
          >
            <img alt="Sample" src={movie.Poster} />
            <CardBody>
              <CardTitle tag="h5">{movie.Title}</CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6">
                {movie.Genre}
              </CardSubtitle>
              <CardText>{movie.Plot}</CardText>
              <CardText>{movie.Language}</CardText>
            </CardBody>
          </Card>
        ))}
      </div>
      {moviesList.length === 0 && <p>No movies found</p>}
    </div>
  );
};

export default MoviesList;
