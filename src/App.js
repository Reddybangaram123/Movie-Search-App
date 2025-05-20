// src/App.js
import React, { useState } from "react";
import axios from "axios";
import MovieList from "./components/MovieList";
import Watchlist from "./components/Watchlist";
import MovieDetail from "./components/MovieDetail";
import Notification from "./components/Notification";
import "./App.css";

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [watchlist, setWatchlist] = useState(() => {
    return JSON.parse(localStorage.getItem("watchlist")) || [];
  });
  const [notification, setNotification] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const showNotification = (message, type = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const searchMovies = async () => {
    if (!query.trim()) {
      showNotification("Please enter a search term", "error");
      return;
    }

    setIsLoading(true);
    setError(null);
    
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`;
      const res = await axios.get(url);
      setMovies(res.data.results || []);
      
      if (res.data.results.length === 0) {
        showNotification("No movies found. Try a different search.", "info");
      }
    } catch (err) {
      setError("Failed to fetch movies. Please try again.");
      showNotification("Failed to fetch movies", "error");
      console.error("Error searching movies:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const addToWatchlist = (movie) => {
    if (watchlist.some((m) => m.id === movie.id)) {
      showNotification(`${movie.title} is already in your watchlist!`, "info");
    } else {
      const updated = [...watchlist, movie];
      setWatchlist(updated);
      localStorage.setItem("watchlist", JSON.stringify(updated));
      showNotification(`${movie.title} added to watchlist! 🎉`);
    }
  };

  const removeFromWatchlist = (id, title) => {
    const updated = watchlist.filter((m) => m.id !== id);
    setWatchlist(updated);
    localStorage.setItem("watchlist", JSON.stringify(updated));
    showNotification(`${title} removed from watchlist`, "info");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies();
    }
  };

  return (
    <div className="app">
      <h1>🎬 Movie Search App</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isLoading}
        />
        <button onClick={searchMovies} disabled={isLoading}>
          {isLoading ? "Searching..." : "Search"}
        </button>
      </div>

      {error && <div className="error-message">{error}</div>}
      
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <MovieList movies={movies} onAdd={addToWatchlist} onSelect={setSelectedMovie} />
      )}

      <Watchlist 
        watchlist={watchlist} 
        onRemove={(id) => {
          const movie = watchlist.find(m => m.id === id);
          removeFromWatchlist(id, movie?.title || "Movie");
        }}
        onSelect={setSelectedMovie}
      />
      
      <MovieDetail movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type}
          onClose={() => setNotification(null)} 
        />
      )}
    </div>
  );
}

export default App;