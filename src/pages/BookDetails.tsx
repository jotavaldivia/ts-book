import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook } from "../services/book.services";
import { BookDetail } from "../components";

const BookDetails = () => {
  const { query } = useParams();

  const [data, setData] = useState();

  useEffect(() => {
    if (!query) return;
    getBook(query)
      .then((data: any) => {
        return setData(data);
      })
      .catch((err) => console.log(err));
  }, [query]);

  console.log(query);
  return <div>{<BookDetail data={data} />}</div>;
};

export default BookDetails;
