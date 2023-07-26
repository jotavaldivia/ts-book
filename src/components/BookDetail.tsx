type bookDetailProps = [
  {
    name: string;
    country: string;
    isbn: string;
    mediaType: string;
    numberOfPages: number;
    publisher: string;
    released: string;
  }
];

type dataProps = {
  data: bookDetailProps | undefined;
};
const BookDetail = ({ data }: dataProps) => {
  const newData = data ? data[0] : undefined;
  const { name, country, isbn, mediaType, numberOfPages, publisher, released } =
    newData || {};

  return (
    <div className="flex flex-col items-center">
      <h1>Detalles del libro</h1>
      <p>{name}</p>
      <p>{country}</p>
      <p>{isbn}</p>
      <p>{mediaType}</p>
      <p>{numberOfPages}</p>
      <p>{publisher}</p>
      <p>{released}</p>
    </div>
  );
};

export default BookDetail;
