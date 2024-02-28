import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import App from "./App.jsx";
import * as pages from "./pages";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <pages.Home />,
      },
      {
        path: "/:productId",
        element: <pages.Product />,
      },
      {
        path: "*",
        element: <pages.Home />,
      },
    ],
  },
  {
    path: "/disclaimer",
    element: <pages.Disclaimer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
