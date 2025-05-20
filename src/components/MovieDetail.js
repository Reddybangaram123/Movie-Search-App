import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MovieDetail.css"; // Make sure you have some base styling here

const MovieDetail = ({ movie, onClose }) => {
  const [providers, setProviders] = useState([]);
  const [watchLink, setWatchLink] = useState("");
  const [availableCountry, setAvailableCountry] = useState("");
  const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

  useEffect(() => {
    if (movie) {
      const fetchProviders = async () => {
        try {
          const res = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${API_KEY}`
          );

          const results = res.data.results;

          let found = false;
          for (const countryCode in results) {
            const countryData = results[countryCode];
            if (countryData.flatrate && countryData.flatrate.length > 0) {
              setWatchLink(countryData.link || "");
              setProviders(countryData.flatrate);
              setAvailableCountry(countryCode);
              found = true;
              break;
            }
          }

          if (!found) {
            setProviders([]);
            setAvailableCountry("");
          }
        } catch (err) {
          console.error("Error fetching providers", err);
        }
      };
      fetchProviders();
    }
  }, [movie, API_KEY]);

  if (!movie) return null;

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
    : "https://via.placeholder.com/300x450?text=No+Image";

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>

        <img src={poster} alt={movie.title} style={{ width: "300px", borderRadius: "8px" }} />

        <div className="modal-text" style={{ marginLeft: "20px", flex: 1 }}>
          <h2>{movie.title}</h2>
          <p><strong>Overview:</strong> {movie.overview}</p>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>

          {providers.length > 0 ? (
            <div style={{ marginTop: "10px" }}>
              <p><strong>Available On{availableCountry ? ` (${availableCountry})` : ""}:</strong></p>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {providers.map((provider) => (
                  <a
                    key={provider.provider_id}
                    href={watchLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      textDecoration: "none",
                      color: "inherit"
                    }}
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w45${provider.logo_path}`}
                      alt={provider.provider_name}
                      title={provider.provider_name}
                      style={{
                        borderRadius: "5px",
                        width: "30px",
                        height: "30px",
                        objectFit: "contain"
                      }}
                    />
                    <span style={{ fontSize: "14px" }}>{provider.provider_name}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : (
            <p><strong>OTT:</strong> Not available on any platform globally.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
