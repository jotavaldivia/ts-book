import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Principal } from "./layouts";
import { Home, Error } from "./pages";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./global.css";
import { BooksProvider } from "./context/book.context";

const queryClient = new QueryClient();
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
    <QueryClientProvider client={queryClient}>
      <BooksProvider>
        <RouterProvider router={router} />
      </BooksProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
