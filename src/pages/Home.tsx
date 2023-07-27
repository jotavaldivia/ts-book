import { Banner } from "../components";
import bannerDesktop from "../assets/images/banner.jpg";
import bannerMobile from "../assets/images/banner_mobile.jpg";
import { useBooksContext } from "../context/book.context";
import { book } from "../models/book.model";
import Book from "../components/Book";
const Home = () => {
  const { isLoading, data } = useBooksContext();

  console.log(isLoading, data);

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

      <h2 className="text-center mt-5 text-4xl text-white-primary ">
        Lista de libros más vendidos
      </h2>

      {isLoading ? (
        <h3 className="text-white-primary text-center mt-10">Cargando...</h3>
      ) : null}
      <ul className="flex justify-center flex-wrap mt-10">
        {data?.map((book: book) => (
          <Book data={book} />
        ))}
      </ul>
    </>
  );
};

export default Home;
