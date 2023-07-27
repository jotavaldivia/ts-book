import { useState } from "react";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(searchQuery);
  };
  return (
    <div>
      <button className="mr-4 text-xl" onClick={handleSearch}>
        BUSCAR
      </button>
      <input
        type="text"
        className="w-full md:w-80 border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none text-black"
        placeholder="Ejemplo : A Game of Thrones"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
