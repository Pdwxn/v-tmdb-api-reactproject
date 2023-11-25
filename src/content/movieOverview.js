import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AppLogo from "../assets/logo.svg";
import axios from "axios";
import constants from "../utils/constants.json";
import "./movieOverview.css";

function MovieOverview() {
  const { API_KEY, API_URL, URL_IMAGE } = constants;

  const { id } = useParams([]);
  const [movieData, setMovieData] = useState({});

  const fetchMovieOverview = async () => {
    const getMovieData = {
      method: "GET",
      url: `${API_URL}/movie/${id}`,
      params: { api_key: API_KEY, language: "es-MX" },
    };
    axios
      .request(getMovieData)
      .then(function (response) {
        console.log(response.data);
        setMovieData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchMovieOverview();
  }, []);

  return (
    <>
      <header className="App-header">
        <span>
          <Link to="../pages/content">
            <img src={AppLogo} alt="Logo" className="App-logo" />
          </Link>
        </span>
        <div className="App-back">
          <span>
            <Link role="button" to="/">
              Cerrar Sesión
            </Link>
          </span>
        </div>
      </header>
      <body>
        <div className="container-over">
          <div>
            <div>
              <img
                className="mvo-backdrop"
                alt="Backdrop Pelicula"
                src={`${URL_IMAGE}${movieData.backdrop_path}`}
              />
            </div>
          </div>
          <div className="container-grid">
            <Link to={`${movieData.homepage}`}>
              <img
                className="mvo-pstr"
                alt="Poster Pelicula"
                src={`${URL_IMAGE}${movieData.poster_path}`}
              />
            </Link>
            <div className="grid-info">
            <h1 className="mvo-title">{movieData.title}</h1>
            <h3 className="mvo-vote">Calificación {movieData.vote_average}</h3>
            <h3 className="mvo-date">
              Fecha de estreno: {movieData.release_date}
            </h3>
            <h3 className="mvo-time">{movieData.runtime} min</h3>
            <h2 className="mvo-tag">{movieData.tagline}</h2>
            <p className="mvo-info">{movieData.overview}</p>
          </div>
        </div>
          </div>
      </body>
      <footer className="app-footer">
        <span>
          <img src={AppLogo} alt="Logo" className="logo-footer" />
          <div className="info-footer">
            <span>Conoce más sobre nosotros</span>
            <span>Términos de uso</span>
            <span>Privacidad</span>
          </div>
        </span>
      </footer>
    </>
  );
}

export default MovieOverview;
