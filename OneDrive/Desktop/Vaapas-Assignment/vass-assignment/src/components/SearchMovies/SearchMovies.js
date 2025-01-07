import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import MovieCard from "../movieCard/movieCard";

export default function SearchMovies() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dogImg, setDogImg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() === '') {
      alert("Please enter a movie name");
      return;
    }

    setLoading(true);
    setError(null);
    setMovies(null);

    const Movieurl = `https://openlibrary.org/search.json?title=${query}`;
    const DogUrl = "https://dog.ceo/api/breeds/image/random";

    try {
      const [movieRes, dogRes] = await Promise.all([fetch(Movieurl), fetch(DogUrl)]);
      const movieData = await movieRes.json();
      const dogData = await dogRes.json();

      setDogImg(dogData.message);
      if (movieData.docs && movieData.docs.length > 0) {
        setMovies(movieData.docs[0]);
      } else {
        setError("No movies found");
      }
    } catch (err) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="query" className="label">
          Movie name
        </label>
        <input
          type="text"
          name="query"
          value={query}
          className="input"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="i.e. Jurassic Park"
        />
        <button className="button" type="submit">
          Search!
        </button>
      </form>
      {loading && (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      )}
      {error && <p className="flash error">{error}</p>}
      {!loading && !error && movies && (
        <div className="card-list">
          <MovieCard dogImg={dogImg} movie={movies} />
        </div>
      )}
    </div>
  );
}
