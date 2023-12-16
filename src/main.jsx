import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<LayOut />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//     </Route>
//   )
// );

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
