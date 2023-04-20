import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import { colorStatus } from "../../utils/constans/Index";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface ItemCardProps {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  handleClick: (id: string) => void;
}

const ItemCard = ({
  id,
  name,
  image,
  species,
  status,
  gender,
  handleClick,
}: ItemCardProps) => {
  const getColorStatus = (status: string) => {
    return colorStatus[status as keyof typeof colorStatus];
  };
  const addFavorite = () => {
    handleClick(id);
    console.log("personaje añadido: ", name);
  };
  return (
    <Card
      sx={{
        borderRadius: "10px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <CardActionArea sx={{ height: "100%" }}>
        <FavoriteIcon
          sx={{
            position: "absolute",
            left: "15px",
            top: "15px",
            height: "20.54px",
            color: "rgba(162, 162, 162, 0.5);",
            transition: "background-color 0.3s ease-in-out",
            "&:hover": {
              color: "#B91C1C",
            },
          }}
          onClick={addFavorite}
        />
        <Grid
          sx={{
            marginTop: "15px",
            display: "grid",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <LazyLoadImage
            src={image}
            effect="blur"
            alt={"imgen"}
            width={160}
            height={160}
            style={{
              borderRadius: "160px",
              borderColor: getColorStatus(status),
              borderWidth: "5px",
              borderStyle: "solid",
            }}
          />

          <Box width="auto">
            <Typography
              sx={{
                width: "160px",
                wordWrap: "break-word",
                marginBottom: "5px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
              }}
              variant="body1"
            >
              {name}
            </Typography>
            <Typography variant="body2" mb="5px">
              {species} | {gender}
            </Typography>
          </Box>
        </Grid>
        <CardContent
          sx={{
            background: getColorStatus(status),
            padding: "0px",
          }}
        >
          <Typography variant="body1" color="common.white" textAlign="center">
            {status}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ItemCard;
