import { PropsWithChildren, createContext, useContext, useState } from "react";
import { getBooks } from "../services/book.services";
import { bookState, createbook } from "../models/book.model";

console.log(getBooks());

const INITIAL_STATE: createbook = {
  name: "",
  authors: "",
  genre: [],
  date: new Date(),
};

const NewBooksContext = createContext(INITIAL_STATE);

const NewBooksProvider = ({ children }: PropsWithChildren) => {
  const [book, setBook] = useState(INITIAL_STATE);

  const handleSubmit = (e: Event): void => {
    e.preventDefault();
    console.log(book);
  };

  const value: bookState = {
    book,
    setBook,
    handleSubmit,
  };

  return (
    <NewBooksContext.Provider value={value}>
      {children}
    </NewBooksContext.Provider>
  );
};

const useNewBooksContext = () => useContext(NewBooksContext);

export { NewBooksProvider, useNewBooksContext };
