import Card from "../components/Card";
import Content from "../components/Content/Index";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import DeleteIcon from "@mui/icons-material/Delete";
import { getCharacters } from "../Services/Api";
import { useEffect, useState } from "react";
import ContentCard from "../components/ContentCard";
import Filter from "../components/Filter/Index";

const Characters = () => {
  interface GlobalFilter {
    type: string;
    value: string;
  }
  const [characters, setCharacters] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [radioFilter, setRadioFilter] = useState<GlobalFilter[]>([]);
  //let inputValue: string;
  const handleTextFilter = (value: string) => {
    setTextFilter(value);
  };

  console.log(radioFilter);
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

  useEffect(() => {
    getCharacters(textFilter, radioFilter)
      .then((response) => setCharacters(response.data.results))
      .catch((error) => console.error(error));
  }, [textFilter || radioFilter]);

  return (
    <Content pt="132px">
      <Card>
        <Grid
          container
          margin="20px"
          width="100%"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Filter handleSearchFilter={handleRadioFilter} clean={cleanFilter} />

          <Grid item sx={{ flexGrow: 1 }}>
            <TextField
              onChange={(e) => handleTextFilter(e.target.value)}
              fullWidth
              id="fullWidth"
              value={textFilter}
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
            <ContentCard characters={characters} />
          </Grid>
        </Grid>
      </Card>
    </Content>
  );
};
export default Characters;
