import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import {
  List,
  ListItemButton,
} from "@mui/material";
import { filter } from "../../utils/constans/Index";
import TitleFilterBy from "../TitleFilterBy";
import ContentFilterOptions from "../ContentFilterOptions";

interface Filter {
  title: string;
  data: string[];
}
interface FiltersState {
  filters: Filter[];
}
interface SelectedState {
  [key: string]: {
    title: string;
    value: string;
  };
}
interface FilterHeaderState {
  filterHeader: string[];
}

const Filter = ({ handleSearchFilter, clean }: any) => {
  const [filtersState, setFiltersState] = useState<FiltersState>({ filters: [] });
  const [filterHeader, setFilterHeader] = useState<FilterHeaderState["filterHeader"]>([]);
  const [selectedValues, setSelectedValues] = useState<SelectedState>({});

  const handleClick = (type: string) => {
    if (filterHeader.includes(type)) {
      setFilterHeader(prevState => prevState.filter((item) => item !== type));
    } else {
      setFilterHeader(prevState => [...prevState, type]);
    }
  };

  const handleChange = (title: string, value: string) => {
    setSelectedValues(prevState => {
      if (prevState.hasOwnProperty(title)) {
        return {
          ...prevState,
          [title]: {
            ...prevState[title],
            value: value
          }
        };
      } else {
        return {
          ...prevState,
          [title]: {
            title: title,
            value: value
          }
        };
      }
    });
    handleSearchFilter({ type: title, value: value });
  };

  const handleClean = () => {
    clean();
    setFilterHeader([]);
  };

  /**
   * This function checks if a specific value is selected for a given title in an object called
   * selectedValues.
   * @param {string} title - A string representing the title of a selected value.
   * @param {string} value - The `value` parameter is a string representing the value of an option that
   * is being checked for in the `selectedValues` object. The function checks if the `selectedValues`
   * object has a property with the `title` key and if its `value` property matches the `value`
   * parameter.
   * @returns The function `isChecked` is returning a boolean value. It checks if the `selectedValues`
   * object has a property with the given `title`. If it does, it checks if the `value` of that
   * property is equal to the given `value`. If it is, the function returns `true`, otherwise it
   * returns `false`.
   */
  const isChecked = (title: string, value: string) => {
    if (selectedValues.hasOwnProperty(title)) {
      return selectedValues[title].value === value;
    } else {
      return false;
    }
  }

  /**
   * The function checks if a given title is included in an array and returns a boolean value.
   * @param {string} title - The `title` parameter is a string that represents the title of an option.
   * @returns The function `isOptionOpen` is returning a boolean value that indicates whether the
   * `title` parameter is included in the `filterHeader` array or not. The function also logs this
   * boolean value to the console.
   */
  const isOptionOpen = (title: string) => {
    return filterHeader.includes(title);
  }

  useEffect(() => {
    //conver object to array
    const filtersArray = Object.values(filter).map((filter) => {
      return {
        title: filter.title,
        data: filter.data,
      };
    });
    setFiltersState({ filters: filtersArray });
  }, [filter]);

  return (
    <Grid
      item
      sx={{
        height: "100%",
        width: "230px",
        paddingRight: "70px",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Typography sx={{ flexGrow: 1 }} variant="h4" fontWeight={700}>
          Filters
        </Typography>
        <ListItemButton
          sx={{
            padding: "0px",
            justifyContent: "right",
          }}
        >
          <DeleteIcon
            onClick={handleClean}
            sx={{ width: "30px", height: "auto" }}
          />
        </ListItemButton>
      </Box>
      {filtersState.filters.length > 0 && (
        <List>
          {filtersState.filters.map((filter, index) => {
            return (
              <div key={index}>
                <TitleFilterBy isOpen={isOptionOpen(filter.title)} title={filter.title} handleClick={(title) => handleClick(title)} />
                <ContentFilterOptions
                  title={filter.title}
                  list={filter.data}
                  isOpen={isOptionOpen(filter.title)}
                  isChecked={(title, value) => isChecked(title, value)}
                  handleChange={(e, title) => handleChange(title, e.target.value)}
                />
              </div>
            )
          })}
        </List>
      )}
    </Grid>
  );
};

export default Filter;
