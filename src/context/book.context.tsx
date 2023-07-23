import { createContext, useContext } from "react";
import { GetBooks } from "../services/book.services";
import { bookResponse } from "../models/book.model";

const INITIAL_STATE: bookResponse = {
  isLoading: false,
  error: null,
  data: null,
};

const BooksContext = createContext(INITIAL_STATE);

const BooksProvider = ({ children }: never) => {
  const { isLoading, error, data } = GetBooks();

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
