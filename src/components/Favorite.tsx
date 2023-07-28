import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type FavoriteProps = {
  favorite: string;
  setFavorites?: any;
  handleAddToFavorites: () => void;
};
const Favorite = ({ handleAddToFavorites }: FavoriteProps) => {
  return (
    <>
      <button onClick={handleAddToFavorites}>
        <FontAwesomeIcon icon={faHeart} className="cursor-pointer " />
      </button>
    </>
  );
};

export default Favorite;
