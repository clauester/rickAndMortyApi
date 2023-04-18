import Box from "@mui/material/Box";
import ItemCard from "../ItemsCard";

const ContentCard = ({ characters }: any) => {
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
        />
      ))}
    </Box>
  );
};

export default ContentCard;
