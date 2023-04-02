import { Box, Typography } from "@mui/material";
import Card from "../components/Card";
import Content from "../components/Content/Index";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCharacters } from "../Services/Api";
import { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../components/ItemCard";
import Filter from "../components/Filter/Index";
const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters()
      .then((response) => setCharacters(response.data.results))
      .catch((error) => console.error(error));
  }, []);

  //console.log(characters);
  return (
    <Content pt="132px">
      <Card>
        <Grid
          container
          margin="20px"
          width="100%"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Filter />

          <Grid item sx={{ flexGrow: 1 }}>
            <TextField
              fullWidth
              id="fullWidth"
              placeholder="Search..."
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
            <ItemCard characters={characters} />
          </Grid>
        </Grid>
      </Card>
    </Content>
  );
};
export default Characters;
