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
const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [textFilter, setTextFilter] = useState("");
  const [radioFilter, setRadioFilter] = useState<GlobalFilter[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [pageInfo, setPageInfo] = useState<InfoProps>({
    totalPages: 0,
    nextUrl: "",
    count: 0,
    prevUrl: "",
  });

  const handleTextFilter = (value: string) => {
    setTextFilter(value);
    setPageNum(1);
  };

  // console.log(radioFilter);
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
    console.log(value);
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
            <ContentCard characters={characters} />
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
