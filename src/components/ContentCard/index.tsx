import Box from "@mui/material/Box";
import ItemCard from "../ItemsCard";
import FavoritesContext from "../Context/FavCharactersContext";
import { useContext } from "react";

interface FavoriteCharactersProps {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: string;
  location: string;
  favorite: boolean;
}
interface ContentCardProps {
  characters: any[];
  handleFavorite: (data: FavoriteCharactersProps) => void;
  columnNumber?: number;
}

const ContentCard = ({
  characters,
  handleFavorite,
  columnNumber,
}: ContentCardProps) => {
  const { favorites, handleFavorites } = useContext(FavoritesContext);

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: `repeat(${columnNumber || 3}, 1fr)`,
        gridColumnGap: "25px",
        gridRowGap: "30px",
      }}
    >
      {characters.map((data: any) => (
        <ItemCard
          id={data.id}
          name={data.name}
          image={data.image}
          species={data.species}
          status={data.status}
          gender={data.gender}
          origin={data.origin.name}
          location={data.location.name}
          key={data.id}
          favorite={favorites.find((e) => e.id === data.id) ? true : false}
          handleClick={handleFavorite}
        />
      ))}
    </Box>
  );
};

export default ContentCard;
