import { useQuery } from "react-query";
import { book } from "../models/book.model";
import { URL_BASE } from "../const";

export const GetBooks = () => {
  const { isLoading, error, data } = useQuery<book[], Error>(
    "books",
    async () => {
      const response = await fetch(`${URL_BASE}/books`);
      if (!response.ok) {
        throw new Error("problemas con la solicitud de los datos");
      }
      const data = await response.json();
      return data;
    }
  );
  return { isLoading, error, data };
};
