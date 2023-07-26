import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../services/book.services";
import { book } from "../models/book.model";
import Book from "../components/Book";

const Search = () => {
  const { query } = useParams();
  const [data, setData] = useState([]);

  console.log(query);

  useEffect(() => {
    if (!query) return;
    getBook(query)
      .then((data) => {
        return setData(data);
      })
      .catch((err) => console.log(err));
  }, [query]);

  return (
    <div>
      <div
        className="flex justify-center mt-5
      "
      >
        {data.length === 0 && <p>No hay informacion del titulo buscado...</p>}

        {data.map((book: book) => {
          return <Book data={book} />;
        })}
      </div>
    </div>
  );
};

export default Search;
