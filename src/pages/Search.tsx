import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../services/book.services";
import { book } from "../models/book.model";

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
      <h1>Hola soy el buscador</h1>

      {data.map((book: book) => {
        return (
          <div key={book.isbn}>
            <h2>{book.name}</h2>
            <p>{book.authors}</p>
            <p>{book.characters}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Search;
