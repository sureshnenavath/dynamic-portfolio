import React from 'react';

export default function MovieCard({ movie, dogImg }) {
  return (
    <div className="card1">
      <img
        className="card--image"
        src={dogImg}
        alt="poster image"
      />
      <div className="card--content">
        <h3 className="card--title">{movie.title}</h3>
        <p>RELEASE DATE: {movie.publish_date[0]}</p>
        <p>RATING: {movie.ratings_average}</p>
        <p className="card--desc">{movie.title_sort}</p>
      </div>
    </div>
  );
}
