// src/components/Watchlist.js
import React from "react";
import "./Watchlist.css";

const Watchlist = ({ watchlist, onRemove, onSelect }) => {
  return (
    <div className="watchlist-container">
      <h2 className="watchlist-header">🎬 Your Watchlist</h2>
      
      {watchlist.length === 0 ? (
        <div className="empty-watchlist">
          <p>Your watchlist is empty</p>
          <p className="emoji">🍿 Add some movies to get started!</p>
        </div>
      ) : (
        <div className="watchlist-items">
          {watchlist.map((movie) => (
            <div 
              key={movie.id} 
              className="watchlist-card"
              onClick={() => onSelect(movie)}
            >
              <div className="watchlist-poster">
                <img 
                  src={movie.poster_path 
                    ? `https://image.tmdb.org/t/p/w92${movie.poster_path}`
                    : "https://via.placeholder.com/92x138?text=No+Image"} 
                  alt={movie.title}
                />
              </div>
              <div className="watchlist-details">
                <h3>{movie.title}</h3>
                <div className="watchlist-actions">
                  <span className="rating">⭐ {movie.vote_average || 'N/A'}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      onRemove(movie.id);
                    }} 
                    className="remove-button"
                    title="Remove from watchlist"
                  >
                    🗑️ Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Watchlist;