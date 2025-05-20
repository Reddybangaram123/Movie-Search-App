// src/components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";

const MovieList = ({ movies, onAdd, onSelect }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onAdd={onAdd} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default MovieList;
