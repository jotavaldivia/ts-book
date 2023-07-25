import {
  FormEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { getBooks } from "../services/book.services";
import { bookState, createbook } from "../models/book.model";

console.log(getBooks());

const INITIAL_STATE: bookState = {
  book: {
    name: "",
    authors: "",
    genre: [],
    date: new Date(),
  },
  setBook: () => {},
  handleSubmit: () => {},
};

const NewBooksContext = createContext(INITIAL_STATE);

const NewBooksProvider = ({ children }: PropsWithChildren) => {
  const [book, setBook] = useState<createbook>({
    name: "",
    authors: "",
    genre: [],
    date: new Date(),
  });

  const handleSubmit = (e: FormEvent<HTMLElement>): void => {
    e.preventDefault();
    console.log(book);
  };

  const value = {
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
