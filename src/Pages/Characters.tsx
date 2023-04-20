import Card from "../components/Card";
import Content from "../components/Content/Index";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { getCharacters } from "../Services/Api";
import { useEffect, useState } from "react";
import ContentCard from "../components/ContentCard";
import Filter from "../components/Filter/Index";
import i18n from "../config/i18n";
import PagePagination from "../components/Pagination";
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

  // const favs = localStorage.getItem("favorites");
  // if (favoriteCharacters.length === 0) {
  //   console.log("estoy vacio");
  //   setFavoriteCharacters(JSON.parse(favs || "{}"));
  // }
  // const favoritosGuardados = localStorage.getItem("favorites");
  // if (favoritosGuardados) {
  //   setFavoriteCharacters(JSON.parse(favoritosGuardados));
  // }
  const handleTextFilter = (value: string) => {
    setTextFilter(value);
    setPageNum(1);
  };
  const handleFavorite = (value: string) => {
    const index = favoriteCharacters.findIndex((elem) => elem.id === value);
    if (index === -1) {
      const newFavorites = [...favoriteCharacters, { id: value }];
      setFavoriteCharacters(newFavorites);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      //console.log(localStorage.getItem("favorites"));
    } else {
      console.log("personaje preexistente");
      const newArray = [...favoriteCharacters];
      newArray.splice(index, 1);
      setFavoriteCharacters(newArray);
      console.log("personaje eliminado: ", index);
    }
  };
  //console.log(localStorage.getItem("favorites"));
  const cleanFilter = () => {
    setRadioFilter([]);
    setTextFilter("");
  };
  //localStorage.removeItem("favorites");

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
          margin="20px"
          width="100%"
          sx={{ display: { xs: "none", md: "flex" }, columnGap: "70px" }}
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
