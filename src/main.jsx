import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LayOut from "./LayOut.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LayOut />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
