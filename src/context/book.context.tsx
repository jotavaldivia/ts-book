import { PropsWithChildren, createContext, useContext, useState } from "react";
import { getBooks } from "../services/book.services";
import { bookResponse, book } from "../models/book.model";

console.log(getBooks());
const INITIAL_STATE: bookResponse = {
  isLoading: false,
  data: [],
};

const BooksContext = createContext(INITIAL_STATE);

const BooksProvider = ({ children }: PropsWithChildren) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<book[]>([]);

  useState(() => {
    getBooks()
      .then((response) => {
        setIsLoading(false);
        setData(response);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  const value = {
    isLoading,
    data,
  };
  console.log(value);

  return (
    <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  );
};

const useBooksContext = () => useContext(BooksContext);

export { BooksProvider, useBooksContext };
