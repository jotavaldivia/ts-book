const Form = () => {
  // título, autor, género y fecha de publicación
  return (
    <div>
      <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Añade tu Libro</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700">
              Titulo
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              className="mt-1 p-2 border w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Autor
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Genero
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border w-full rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Fecha de Publicación
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 border w-full rounded"
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
