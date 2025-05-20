// src/components/MovieCard.js
import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie, onAdd, onSelect }) => {
  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/200x300?text=No+Image";

  const handleAdd = (e) => {
    e.stopPropagation();
    onAdd(movie);
  };

  return (
    <div className="movie-card" onClick={() => onSelect(movie)}>
      <img src={poster} alt={movie.title} />
      <div className="card-body">
        <h3>{movie.title}</h3>
        <p>⭐ {movie.vote_average}</p>
        <button onClick={handleAdd}>+ Watchlist</button>
      </div>
    </div>
  );
};

export default MovieCard;