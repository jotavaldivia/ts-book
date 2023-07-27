import { Link } from "react-router-dom";
import { bookProps } from "../models/book.model";

const Book = ({ data }: bookProps) => {
  return (
    <>
      <li
        className="flex justify-center items-center p-4 m-3 border border-color-black border-x-4 border-y-4 max-w-xl "
        key={data.isbn}
      >
        <p className="p-3 text-white-primary ">{data.name}</p>
        <p className="p-3 text-white-primary ">{data.authors[0]}</p>
        <p className="p-3 text-white-primary ">{data.numberOfPages}</p>
        <p className="p-3 text-white-primary ">{data.mediaType}</p>
        <Link to={`/details/${data.name}`}>
          <p className="text-button-color cursor-pointer">VER MAS</p>
        </Link>
      </li>
    </>
  );
};

export default Book;
