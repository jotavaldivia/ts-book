const SearchBar = () => {
  return (
    <div>
      <input
        type="text"
        className="w-full md:w-80 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black"
        placeholder="Buscar..."
      />
    </div>
  );
};

export default SearchBar;
