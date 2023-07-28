import { Banner, Favorite } from "../components";
import bannerDesktop from "../assets/images/banner.jpg";
import bannerMobile from "../assets/images/banner_mobile.jpg";
import { useBooksContext } from "../context/book.context";
import { book } from "../models/book.model";
// import Book from "../components/Book";
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Home = () => {
  const { isLoading, data } = useBooksContext();
  const columns = [
    {
      header: "name",
      accessorKey: "name",
    },
    {
      header: "authors",
      accessorKey: "authors",
    },

    {
      header: "numberOfPages ",
      accessorKey: "numberOfPages",
    },
    {
      header: "mediaType ",
      accessorKey: "mediaType",
    },
  ];
  const [filter, setFilter] = useState("");
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel<book>(),
    getFilteredRowModel: getFilteredRowModel<book>(),
    state: {
      globalFilter: filter,
    },
    onGlobalFilterChange: setFilter,
  });

  const windowWidth = window.innerWidth;
  const breakpoint = 768;
  const [favorites, setFavorites] = useState<book[]>([]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const handleAddToFavorites = (data: any) => {
    setFavorites([...favorites, data]);
    console.log(favorites);
  };
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
      ) : (
        <div>
          <div className="flex justify-center items-center mt-10">
            <span className="mr-3 text-zinc-50">Buscar:</span>
            <input
              placeholder="A Game of Thrones.."
              className="w-full md:w-80 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black"
              type="text"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <table className="flex flex-col items-center text-title-color mt-10   ">
            <thead className="mt-5">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr className="" key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th className="p-4 " key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row, index) => (
                <tr
                  className="border border-color-black border-x-4 border-y-4"
                  key={row.id}
                >
                  {row.getVisibleCells().map((cell) => (
                    <td className="p-4" key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                  <td>
                    <div className="flex m-4 p-2">
                      <Link
                        to={`/details/${data[index].name}`}
                        className="mr-5"
                      >
                        <p className="text-button-color cursor-pointer ">
                          VER MAS
                        </p>
                      </Link>

                      <Favorite
                        handleAddToFavorites={() =>
                          handleAddToFavorites(data[index])
                        }
                        favorite={""}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* 
      {isLoading ? (
        <h3 className="text-white-primary text-center mt-10">Cargando...</h3>
      ) : null}
      <ul className="flex justify-center flex-wrap mt-10">
        {data?.map((book: book) => (
          <Book data={book} />
        ))}
      </ul> */}
    </>
  );
};

export default Home;
