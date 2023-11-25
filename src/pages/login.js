import React from "react";
import { Link } from "react-router-dom";
import "./login.css";
import AppLogo from "../assets/logo.svg";


function login() {
  return (
    <>
      <header className="App-header">
        <span>
          <img src={AppLogo} alt="Logo" className="App-logo" />
        </span>
        <div className="App-back">
          <span>
            <Link role="button" to="/">
              Volver
            </Link>
          </span>
        </div>
      </header>
     <body className="body-login">
      <span className="back-img">
        <img src="https://m.media-amazon.com/images/G/33/digital/video/Magellan_MLP/BRND_MTH23_PVMagnetLeft_1440x675_POST_Final_noLocale_DOT3547.jpg" alt="img-card-login" />
      </span>
       <form className="form-inicio" action="" method="">
        <label className="form-top" for="usuario">
          Inicia Sesión
        </label>
        <input
          className="form-data"
          id="usuario"
          type="text"
          placeholder="Usuario"
          name="usuario"
        />
        <input
          className="form-pswrd"
          id="contraseña"
          type="password"
          placeholder="Contraseña"
          name="contraseña"
        />
        <Link to="/content">
          <button className="form-bttn" type="submit">
            Iniciar Sesión
          </button>
        </Link>
      </form>
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

export default login;
