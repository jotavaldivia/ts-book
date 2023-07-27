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
    <div className="flex flex-col items-center border border-slate-600 mt-10">
      <h1 className="p-3 text-white-primary">Detalles del libro</h1>
      <p className="p-3 text-white-primary">{name}</p>
      <p className="p-3 text-white-primary">{country}</p>
      <p className="p-3 text-white-primary">{isbn}</p>
      <p className="p-3 text-white-primary">{mediaType}</p>
      <p className="p-3 text-white-primary">{numberOfPages}</p>
      <p className="p-3 text-white-primary">{publisher}</p>
      <p className="p-3 text-white-primary">{released}</p>
    </div>
  );
};

export default BookDetail;
