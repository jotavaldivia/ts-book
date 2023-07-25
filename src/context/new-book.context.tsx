import {
  FormEvent,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { bookState, createbook } from "../models/book.model";

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

  const estadoInicial = {
    lírico: false,
    epístola: false,
    leyenda: false,
    fábula: false,
    romántico: false,
  };

  const [gender, setGender] = useState(estadoInicial);

  const handleCheck = (e: any) => {
    setGender({
      ...gender,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      setBook({ ...book, genre: [...book.genre, e.target.value] });
    } else {
      setBook({
        ...book,
        genre: book.genre.filter((item) => item !== e.target.value),
      });
    }
  };

  const value = {
    book,
    setBook,
    handleSubmit,
    handleCheck,
  };

  return (
    <NewBooksContext.Provider value={value}>
      {children}
    </NewBooksContext.Provider>
  );
};

const useNewBooksContext = () => useContext(NewBooksContext);

export { NewBooksProvider, useNewBooksContext };
