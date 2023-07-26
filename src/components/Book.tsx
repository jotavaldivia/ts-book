import { Link } from "react-router-dom";
import { bookProps } from "../models/book.model";

const Book = ({ data }: bookProps) => {
  return (
    <>
      <li
        className="flex justify-center p-4 m-3 border border-black max-w-xl "
        key={data.isbn}
      >
        <p className="p-3">{data.name}</p>
        <p className="p-3">{data.authors[0]}</p>
        <p className="p-3">{data.numberOfPages}</p>
        <p className="p-3">{data.mediaType}</p>
        <Link to={`/details/${data.name}`}>
          <p className="text-amber-600 cursor-pointer">VER MAS</p>
        </Link>
      </li>
    </>
  );
};

export default Book;
