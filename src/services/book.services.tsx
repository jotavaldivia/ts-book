import { book } from "../models/book.model";
import { URL_BASE } from "../const";

export const getBooks = async (): Promise<book[]> => {
  const response = await fetch(`${URL_BASE}/books`);
  const data = await response.json();
  return data;
};

export const getBook = async (name: string | undefined): Promise<book> => {
  const response = await fetch(`${URL_BASE}/books?name=${name}`);
  const data = await response.json();
  return data;
};
