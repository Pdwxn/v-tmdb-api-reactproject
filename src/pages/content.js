import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../Components/movieCard";
import AppLogo from "../assets/logo.svg";
import "./content.css";
import { useEffect, useState } from "react";
import axios from "axios";
import constants from "../utils/constants.json"

function Content() {
  const {API_KEY, API_URL, URL_IMAGE} = constants

  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const fetchMovies = async (searchKey) => {
    console.log("init invoque ", + searchKey)
    const type = searchKey ? "search" : "discover";
    const { data: { results },} = await
    axios.get(`${API_URL}/${type}/movie`, {
      params: { api_key: API_KEY, query: searchKey, language: 'es-MX',},
    });
    setMovies(results);
  };

  const handleOnchange = (event) => {
    console.log(event.target.value)
    setSearchKey(event.target.value)
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    fetchMovies(searchKey);
  }, [searchKey]);

  return (
    <section>
      <header className="App-header">
        <span>
          <img src={AppLogo} alt="Logo" className="App-logo" />
        </span>
          <input className="search-bar" type="text" placeholder="Buscar" onChange={handleOnchange}/>
        <div className="App-back">
          <span>
            <Link role="button" to="/">
              Cerrar Sesión
            </Link>
          </span>
        </div>
      </header>
      <div className="flex-container">
        <MovieCard movies={movies} basePathImage={URL_IMAGE}/>
      </div>
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
    </section>
  );
}

export default Content;
