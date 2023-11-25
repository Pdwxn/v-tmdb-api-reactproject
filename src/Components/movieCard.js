import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.css";

function MovieCard({movies, basePathImage}) {

  return (
    <>
      {movies && movies.map((movie, index) => (
        <article key={index} className="mv-card">
          <section className="mv-posterhvr">
          <Link to={`/content/MovieSelect/${movie.id}`}>
            <img
              className="mv-poster"
              alt="Poster pelicula"
              src={`${basePathImage}${movie.poster_path}`}
            />
          </Link>
            <div>
              <p className="mv-title">{movie.title}</p>
              <p className="mv-release">Fecha de estreno: {movie.release_date}</p>
            </div>
          </section>
        </article>
      ))}
    </>
  );
}

export default MovieCard;
