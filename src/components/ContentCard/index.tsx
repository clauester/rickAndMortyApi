import Box from "@mui/material/Box";
import ItemCard from "../ItemsCard";

interface ContentCardProps {
  characters: any[];
  handleFavorite: (id: string) => void;
}

const ContentCard = ({ characters, handleFavorite }: ContentCardProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
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
          key={data.id}
          handleClick={handleFavorite}
        />
      ))}
    </Box>
  );
};

export default ContentCard;
