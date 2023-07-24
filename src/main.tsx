import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Principal } from "./layouts";
import { Home, Error, CreateBooks } from "./pages";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BooksProvider } from "./context/book.context";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Principal />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-book",
        element: <CreateBooks />,
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
    <BooksProvider>
      <RouterProvider router={router} />
    </BooksProvider>
  </React.StrictMode>
);
