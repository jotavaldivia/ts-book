import { createContext, useContext, useState } from "react";
import { getBooks } from "../services/book.services";
import { bookResponse } from "../models/book.model";

console.log(getBooks());
const INITIAL_STATE: bookResponse = {
  isLoading: false,
  error: null,
  data: null,
};

const BooksContext = createContext(INITIAL_STATE);

const BooksProvider = ({ children }: never) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(true);
  const [data, setData] = useState(null);

  useState(() => {
    setIsLoading(true);
    setError(false);
    setData(null);
    getBooks()
      .then((response) => {
        setIsLoading(false);
        setError(false);
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(true);
        setData(null);
        console.log(error);
      });
  });

  const value = {
    isLoading,
    error,
    data,
  };

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

const useBooksContext = () => useContext(BooksContext);

export { BooksProvider, useBooksContext };
