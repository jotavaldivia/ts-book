import { Banner } from "../components";
import bannerDesktop from "../assets/images/banner.jpg";
import bannerMobile from "../assets/images/banner_mobile.jpg";
import { useBooksContext } from "../context/book.context";
import { book } from "../models/book.model";
const Home = () => {
  const { isLoading, error, data } = useBooksContext();

  console.log(isLoading, error, data);

  const windowWidth = window.innerWidth;

  const breakpoint = 768; // Puedes ajustar este valor según tus necesidades
  return (
    <>
      <div>
        {windowWidth < breakpoint ? (
          <Banner url={bannerMobile} />
        ) : (
          <Banner url={bannerDesktop} />
        )}
      </div>

      <h2 className="text-center mt-5 text-4xl text-slate-950">
        Lista de libros más vendidos
      </h2>

      {isLoading ? <p>Cargando...</p> : null}
      <ul className="flex justify-center flex-wrap mt-10">
        {data?.map((book: book, index) => (
          <li
            className="flex justify-center p-4 m-3 border border-black max-w-sm "
            key={index}
          >
            <p>{book.name}</p>
            <p>{book.authors[0]}</p>
            <p>{book.numberOfPages}</p>
            <p>{book.mediaType}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
