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
        padding: "30px 0px 0px 0px",
      }}
    >
      {characters.map((data: any) => (
        <ItemCard data={data} key={data.id} />
      ))}
    </Box>
  );
};

export default ContentCard;
