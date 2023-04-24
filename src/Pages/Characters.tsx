import Card from "../components/Card";
import Content from "../components/Content/Index";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { getCharacters } from "../Services/Api";
import { useContext, useEffect, useState } from "react";
import ContentCard from "../components/ContentCard";
import Filter from "../components/Filter/Index";
import i18n from "../config/i18n";
import PagePagination from "../components/Pagination";
import FavoritesContext from "../components/Context/FavCharactersContext";
import CustomModal from "../components/CustomModal";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Button, Typography } from "@mui/material";
interface GlobalFilter {
  type: string;
  value: string;
}
interface InfoProps {
  totalPages: number;
  nextUrl: string;
  count: number;
  prevUrl: string;
}
interface FavoriteCharactersProps {
  id: string;
}
const Characters = () => {
  // console.log(localStorage.getItem("favorites"));
  const { favorites, handleFavorites } = useContext(FavoritesContext);
  const [characters, setCharacters] = useState<any[]>([]);
  const [favoriteCharacters, setFavoriteCharacters] = useState<
    FavoriteCharactersProps[]
  >([]);
  const [textFilter, setTextFilter] = useState("");
  const [radioFilter, setRadioFilter] = useState<GlobalFilter[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageInfo, setPageInfo] = useState<InfoProps>({
    totalPages: 0,
    nextUrl: "",
    count: 0,
    prevUrl: "",
  });
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseMOdal = () => setOpenModal(false);
  console.log("hola estoy funcionando: ", favorites);

  const handleTextFilter = (value: string) => {
    setTextFilter(value);
    setPageNum(1);
  };
  const handleFavorite = (value: string) => {
    if (!favoriteCharacters.some((elem) => elem.id === value)) {
      const newFavorites = [...favoriteCharacters, { id: value }];
      setFavoriteCharacters(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));

      console.log("personaje añadido: ", value);
      handleFavorites(newFavorites);
    } else {
      console.log("personaje preexistente");
      const newArray = favoriteCharacters.filter((data) => data.id !== value);
      setFavoriteCharacters(newArray);
      localStorage.setItem("favorites", JSON.stringify(newArray));
      handleFavorites(newArray);
      console.log("personaje eliminado: ", parseInt(value));
      console.log("actuales: ", newArray);
    }
  };

  // const addFavorite = (value: string) => {
  //   if (!favoriteCharacters.some((elem) => elem.id === value)) {
  //     const newFavorites = [...favoriteCharacters, { id: value }];
  //     setFavoriteCharacters(newFavorites);
  //     localStorage.setItem("favorites", JSON.stringify(newFavorites));
  //   }
  // };
  // const deleteFavorite = (value: string) => {
  //   if (!favoriteCharacters.filter((elem) => elem.id === value)) {
  //     console.log("personaje preexistente");
  //     const newArray = [...favoriteCharacters];
  //     newArray.splice(parseInt(value), 1);
  //     setFavoriteCharacters(newArray);
  //     localStorage.setItem("favorites", JSON.stringify(newArray));
  //     console.log("personaje eliminado: ", parseInt(value));
  //   }
  // };

  const cleanFilter = () => {
    setRadioFilter([]);
    setTextFilter("");
  };

  const handleRadioFilter = (value: GlobalFilter) => {
    const index = radioFilter.findIndex((item) => item.type === value.type);
    if (index === -1) {
      setRadioFilter([
        ...radioFilter,
        { type: value.type, value: value.value },
      ]);
    } else {
      const updatedData = [...radioFilter];
      updatedData[index] = { type: value.type, value: value.value };
      setRadioFilter(updatedData);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    //console.log(value);
    setPageNum(value);
  };
  useEffect(() => {
    getCharacters(textFilter, radioFilter, pageNum)
      .then((response) => {
        setCharacters(response.data.results);
        setPageInfo({
          totalPages: response.data.info.pages,
          nextUrl: response.data.info.next,
          count: response.data.info.count,
          prevUrl: response.data.info.prev,
        });
      })
      .catch((error) => {
        console.error(error);
        setPageNum(1);
      });
  }, [textFilter, radioFilter, pageNum]);

  useEffect(() => {
    const store = localStorage.getItem("favorites");
    if (store) {
      setFavoriteCharacters(JSON.parse(store));
    }
    console.log("chacnito feliz", store);
  }, []);
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
            // columnGap: "60px",
          }}
        >
          <Filter handleSearchFilter={handleRadioFilter} clean={cleanFilter} />

          <Grid item sx={{ flexGrow: 1, rowGap: "30px", display: "grid" }}>
            <TextField
              onChange={(e) => handleTextFilter(e.target.value)}
              fullWidth
              id="fullWidth"
              value={textFilter}
              placeholder={i18n.t("filter.search")}
              inputProps={{
                style: {
                  marginLeft: "20px",
                  padding: "8px 0px",
                  fontSize: "16px",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "10px",
                  background: "background.paper",
                },
              }}
            />
            <ContentCard
              characters={characters}
              handleFavorite={handleFavorite}
              columnNumber={3}
            />
            <PagePagination
              handlePage={handlePageChange}
              pageInfo={pageInfo}
              actualPage={pageNum}
            />
          </Grid>
        </Grid>

        <Grid
          container
          className="tablet-Characters"
          margin="20px"
          width="100%"
          sx={{ display: { xs: "none", sm: "grid", md: "none" } }}
        >
          <Grid item sx={{ flexGrow: 1, rowGap: "15px", display: "grid" }}>
            <TextField
              onChange={(e) => handleTextFilter(e.target.value)}
              fullWidth
              id="fullWidth"
              value={textFilter}
              placeholder={i18n.t("filter.search")}
              inputProps={{
                style: {
                  marginLeft: "20px",
                  padding: "8px 0px",
                  fontSize: "16px",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "10px",
                  background: "background.paper",
                },
              }}
            />
            <Box sx={{ alignItems: "center", display: "flex" }}>
              <Box sx={{ flexGrow: 1, textAlign: "left" }}>
                <Button onClick={handleOpenModal}>
                  <FilterAltIcon />
                  <Typography>Filters</Typography>
                </Button>
              </Box>
              <DeleteIcon />
              <CustomModal open={openModal} handleClose={handleCloseMOdal}>
                <Filter
                  handleSearchFilter={handleRadioFilter}
                  clean={cleanFilter}
                />
              </CustomModal>
            </Box>
            <ContentCard
              characters={characters}
              handleFavorite={handleFavorite}
              columnNumber={2}
            />
            <PagePagination
              handlePage={handlePageChange}
              pageInfo={pageInfo}
              actualPage={pageNum}
            />
          </Grid>
        </Grid>
        <Grid
          container
          className="mobile-Characters"
          margin="20px"
          width="100%"
          sx={{ display: { xs: "flex", sm: "none" } }}
        >
          {/* <Filter handleSearchFilter={handleRadioFilter} clean={cleanFilter} /> */}

          <Grid item sx={{ flexGrow: 1, rowGap: "30px", display: "grid" }}>
            <TextField
              onChange={(e) => handleTextFilter(e.target.value)}
              fullWidth
              id="fullWidth"
              value={textFilter}
              placeholder={i18n.t("filter.search")}
              inputProps={{
                style: {
                  marginLeft: "20px",
                  padding: "8px 0px",
                  fontSize: "16px",
                },
              }}
              InputProps={{
                sx: {
                  borderRadius: "10px",
                  background: "background.paper",
                },
              }}
            />
            <ContentCard
              characters={characters}
              handleFavorite={handleFavorite}
              columnNumber={1}
            />
            <PagePagination
              handlePage={handlePageChange}
              pageInfo={pageInfo}
              actualPage={pageNum}
            />
          </Grid>
        </Grid>
      </Card>
    </Content>
  );
};
export default Characters;
