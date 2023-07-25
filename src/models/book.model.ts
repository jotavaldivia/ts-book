import { ChangeEvent, FormEvent } from "react";

export interface book {
  url: string;
  name: string;
  isbn: string;
  authors: string[];
  numberOfPages: number;
  publisher: string;
  country: string;
  mediaType: string;
  released: string;
  characters: string[];
  povCharacters: string[];
}

export interface bookResponse {
  data: book[];
  isLoading: boolean;
}

export interface createbook {
  name: string;
  authors: string;
  genre: string[];
  date: Date;
}

export interface bookState {
  book: createbook;
  setBook: (book: createbook) => void;
  handleSubmit: (e: FormEvent<HTMLElement>) => void;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
