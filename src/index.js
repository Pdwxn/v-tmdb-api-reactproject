import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LoginPage from "./pages/login";
import Content from "./pages/content";
import MovieContent from "./content/movieOverview";
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "login",
    element: <LoginPage/>,
  },
  {
    path: "Content",
    element: <Content/>,
  },
  {
    path: "content/MovieSelect/:id",
    element: <MovieContent/>,
  },
  {
    path: "pages/content",
    element: <Content/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
