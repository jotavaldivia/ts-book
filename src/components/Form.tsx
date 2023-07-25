import { FormEvent } from "react";
import { useNewBooksContext } from "../context/new-book.context";

const Form = () => {
  // título, autor, género y fecha de publicación
  console.log(useNewBooksContext());

  const { book, setBook, handleSubmit } = useNewBooksContext();
  // const { book, setBook, handleSubmit } = useNewBooksContext();

  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Añade tu Libro</h2>
        <form
          onSubmit={(e: FormEvent<HTMLElement>) => {
            handleSubmit(e);
          }}
        >
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700">
              Titulo
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 border w-full rounded"
              onChange={(e) => setBook({ ...book, name: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-700">
              Autor
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="mt-1 p-2 border w-full rounded"
              onChange={(e) => setBook({ ...book, authors: e.target.value })}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="text" className="block text-gray-700">
              Genero
            </label>

            <select
              name="genre"
              id="genre"
              className="mt-1 p-2 border w-full rounded"
              onChange={(e) => setBook({ ...book, genre: [e.target.value] })}
            >
              <option value="otro">Seleccione...</option>
              <option value="Hombre">Hombre</option>
              <option value="Mujer">Mujer</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">
              Fecha de Publicación
            </label>
            <input
              type="date"
              id="date"
              name="date"
              className="mt-1 p-2 border w-full rounded"
              onChange={(e) =>
                setBook({ ...book, date: new Date(e.target.value) })
              }
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
