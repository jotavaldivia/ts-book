import { FormEvent, ChangeEvent } from "react";
import { useNewBooksContext } from "../context/new-book.context";

const Form = () => {
  const { book, setBook, handleSubmit, handleInputChange } =
    useNewBooksContext();

  return (
    <div>
      <div className="max-w-xl mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Añade tu Libro</h2>
        <form
          onSubmit={(e: FormEvent<HTMLElement>) => {
            handleSubmit(e);
          }}
        >
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700">
              Título
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
            <p className="mb-5">Género</p>
            <label className="mr-2" htmlFor="lírico">
              lírico
            </label>
            <input
              className="mr-2"
              type="checkbox"
              name="lírico"
              id="líirico"
              value="lírico"
              onClick={(e) => handleInputChange(e)}
            />
            <label className="mr-2" htmlFor="epístola">
              epístola
            </label>
            <input
              className="mr-2"
              type="checkbox"
              name="epístola"
              id="epístola"
              value="epístola"
              onClick={(e) => handleInputChange(e)}
            />
            <label className="mr-2" htmlFor="leyenda">
              leyenda
            </label>
            <input
              className="mr-2"
              type="checkbox"
              name="leyenda"
              id="leyenda"
              value="leyenda"
              onClick={(e) => handleInputChange(e)}
            />
            <label className="mr-2" htmlFor="fábula">
              fábula
            </label>
            <input
              className="mr-2"
              type="checkbox"
              name="fábula"
              id="fábula"
              value="fábula"
              onClick={(e) => handleInputChange(e)}
            />
            <label className="mr-2" htmlFor="romántico">
              romántico
            </label>
            <input
              className="mr-2"
              type="checkbox"
              name="romántico"
              id="romántico"
              value="romántico"
              onClick={(e) => handleInputChange(e)}
            />
            {/* 
            <select
              name="genre"
              id="genre"
              className="mt-1 p-2 border w-full rounded"
              onChange={(e) => setBook({ ...book, genre: [e.target.value] })}
            >
              <option value="otro">Seleccione...</option>
              <option value="lírico">lírico</option>
              <option value="epístola">epístola</option>
              <option value="leyenda">leyenda</option>
              <option value="fábula">fábula</option>
              <option value="romántico">romantico</option>
            </select> */}
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
