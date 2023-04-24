import { Box, Grid, Typography } from "@mui/material";
import Content from "../components/Content/Index";
import Card from "../components/Card";
import FavoritesContext from "../components/Context/FavCharactersContext";
import { useContext } from "react";
import ContentCard from "../components/ContentCard";
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
const Favorites = () => {
  const { favorites, handleFavorites } = useContext(FavoritesContext);

  const handleFavorite = (data: FavoriteCharactersProps) => {
    if (!favorites.some((elem) => elem.id === data.id)) {
      const newFavorites = [...favorites, data];
      localStorage.setItem(
        "favorites en favorites",
        JSON.stringify(newFavorites)
      );
      console.log("personaje añadido en favorites: ", newFavorites);
      handleFavorites(newFavorites);
    } else {
      console.log("personaje preexistente");
      const newArray = favorites.filter((value) => value.id !== data.id);
      localStorage.setItem("favorites", JSON.stringify(newArray));
      handleFavorites(newArray);
      console.log("personaje eliminado en favorites: ", parseInt(data.id));
      console.log("actuales en favorites: ", newArray);
    }
  };
  return (
    <Content pt="132px">
      <Card>
        <Grid
          container
          className="desktop-Characters"
          margin="20px"
          width="100%"
          columnGap={{ md: "60px" }}
          sx={{
            display: { xs: "none", ms: "none", md: "flex" },
            flexDirection: "column",
            // columnGap: "60px",
          }}
        >
          <Typography sx={{ paddingLeft: "50px" }} variant="h4">
            Favorite Characters
          </Typography>
          <Grid
            item
            sx={{
              flexGrow: 1,
              rowGap: "30px",
              display: "grid",
              padding: "50px",
            }}
          >
            <ContentCard
              characters={favorites}
              handleFavorite={handleFavorite}
              columnNumber={3}
            />
          </Grid>
        </Grid>
      </Card>
    </Content>
  );
};
export default Favorites;
