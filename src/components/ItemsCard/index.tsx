import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Box from "@mui/material/Box";
import { colorStatus } from "../../utils/constans/Index";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CustomModal from "../CustomModal";
import { useContext, useState } from "react";
import FavoritesContext from "../Context/FavCharactersContext";

interface ItemCardProps {
  id: string;
  name: string;
  image: string;
  species: string;
  status: string;
  gender: string;
  origin: string;
  location: string;
  handleClick: (id: string) => void;
  favorite: boolean;
}

const ItemCard = ({
  id,
  name,
  image,
  species,
  status,
  gender,
  origin,
  location,
  handleClick,
  favorite,
}: ItemCardProps) => {
  const [openModal, setOpenModal] = useState(false);
  const { favorites, handleFavorites } = useContext(FavoritesContext);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseMOdal = () => setOpenModal(false);
  const getColorStatus = (status: string) => {
    return colorStatus[status as keyof typeof colorStatus];
  };
  const addFavorite = () => {
    handleClick(id);
  };
  const handleFavorite = () => {
    if (!favorites.some((elem) => elem.id === id)) {
      const newFavorites = [...favorites, { id: id }];
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      handleFavorites(newFavorites);
    } else {
      console.log("personaje preexistente");
      const newArray = favorites.filter((data) => data.id !== id);
      localStorage.setItem("favorites", JSON.stringify(newArray));
      handleFavorites(newArray);
    }
  };

  return (
    <Card
      sx={{
        borderRadius: "10px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <CardActionArea sx={{ height: "100%", cursor: "default" }}>
        <FavoriteIcon
          sx={{
            position: "absolute",
            left: "15px",
            top: "15px",
            height: "20.54px",
            color: favorite ? "#B91C1C" : "rgba(162, 162, 162, 0.5)",
            transition: "background-color 0.3s ease-in-out",
            "&:hover": {
              color: "#B91C1C",
            },
            cursor: "pointer",
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
            onClick={handleOpenModal}
            effect="blur"
            alt={"imgen"}
            width={160}
            height={160}
            style={{
              borderRadius: "160px",
              borderColor: getColorStatus(status),
              borderWidth: "5px",
              borderStyle: "solid",
              cursor: "pointer",
            }}
          />
          <CustomModal open={openModal} handleClose={handleCloseMOdal}>
            <Box width="100%">
              <Grid container width="100%" height="490px">
                <Grid item height="100%">
                  <LazyLoadImage
                    src={image}
                    effect="blur"
                    alt={"imgen"}
                    width="auto"
                    height="100%"
                    style={{ borderTopLeftRadius: "10px" }}
                  />
                </Grid>
                <Grid
                  item
                  alignItems="center"
                  display="grid"
                  m="20px"
                  flexGrow={1}
                >
                  <Grid gap="20px" display="grid">
                    <Typography variant="h6">Name: {name}</Typography>
                    <Typography variant="h6">Species: {species}</Typography>
                    <Typography variant="h6">Gender: {gender}</Typography>
                    <Typography variant="h6">Origen: {origin}</Typography>
                    <Typography variant="h6">Locations: {location}</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid
                item
                display="flex"
                flexDirection="column"
                alignSelf="flex-end"
                textAlign="center"
              >
                <Typography
                  color="common.white"
                  variant="h6"
                  style={{
                    backgroundColor: getColorStatus(status),
                    height: "40px",
                    justifyContent: "center",
                    alignItems: "center",
                    // display: "flex",
                  }}
                >
                  {status}
                </Typography>

                <Typography
                  variant="body1"
                  color="common.white"
                  onClick={handleFavorite}
                  style={{
                    height: "40px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    backgroundColor: "#1D212C",
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  Add To favorites
                </Typography>
              </Grid>
            </Box>
          </CustomModal>

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
