import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Principal } from "./layouts";
import { Home, Error, CreateBooks, Favorites } from "./pages";
import ReactDOM from "react-dom/client";
import "./global.css";
import { BooksProvider } from "./context/book.context";
import Search from "./pages/Search";
import BookDetails from "./pages/BookDetails";

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
      {
        path: "/:query",
        element: <Search />,
      },
      {
        path: "/details/:query",
        element: <BookDetails />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
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
