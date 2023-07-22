import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Principal } from "./layouts";
import { Home, Error } from "./pages";
import ReactDOM from "react-dom/client";
import "./global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
