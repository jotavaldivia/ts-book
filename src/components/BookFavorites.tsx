import { useEffect, useState } from "react";
import { bookProps } from "../models/book.model";

const BookFavorites = () => {
  const [favorites, setFavorites] = useState<bookProps | undefined>();
  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites") || "[]";
    setFavorites(JSON.parse((storedFavorites as string) || "[]"));
  }, []);
  console.log(favorites);
  return (
    <div>
      <ul className="flex flex-col items-center">
        {favorites?.map((favorite: any) => (
          <li
            key={favorite.isbn}
            className="flex justify-center items-center p-4 m-3 border border-color-black border-x-4 border-y-4 max-w-xl "
          >
            <p className="p-3 text-white-primary ">{favorite.name}</p>
            <p className="p-3 text-white-primary ">{favorite.authors[0]}</p>
            <p className="p-3 text-white-primary ">{favorite.numberOfPages}</p>
            <p className="p-3 text-white-primary ">{favorite.mediaType}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookFavorites;
