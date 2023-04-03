import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { filter } from "../../utils/constans/Index";
interface GlobalFilter {
  type: string;
  value: string;
}
const Filter = ({ data, clean }: any) => {
  const [selectedValueStatus, setSelectedValueStatus] = useState("");
  const [selectedValueGender, setSelectedValueGender] = useState("");
  const [selectedValueSpecie, setSelectedValueSpecie] = useState("");

  const [openStatus, setOpenStatus] = useState(false);
  const [openSpecie, setOpenSpecie] = useState(false);
  const [openGender, setOpenGender] = useState(false);

  const handleClick = (type: string) => {
    switch (type) {
      case "gender":
        setOpenGender(!openGender);
        break;
      case "status":
        setOpenStatus(!openStatus);
        break;
      case "species":
        setOpenSpecie(!openSpecie);
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    filterType: string
  ) => {
    const value = event.target.value;

    switch (filterType) {
      case "gender":
        setSelectedValueGender(value);
        break;
      case "status":
        setSelectedValueStatus(value);
        break;
      case "species":
        setSelectedValueSpecie(value);
    }
    data({ type: filterType, value: value });
  };

  const handleClean = () => {
    clean();
    setSelectedValueStatus("");
    setSelectedValueGender("");
    setSelectedValueSpecie("");
  };
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
      <List>
        <ListItemButton
          onClick={() => handleClick(filter.status.title)}
          sx={{ p: 0, height: "50px" }}
        >
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            Status
          </Typography>
          {openStatus ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openStatus} timeout="auto" unmountOnExit sx={{ p: 0 }}>
          <List component="div" disablePadding>
            {filter.status.data.map((data: any) => (
              <ListItem
                sx={{ p: 0, alignItems: "center", m: "20px 0px" }}
                key={data}
              >
                <Radio
                  checked={selectedValueStatus === data}
                  onChange={(e) => handleChange(e, filter.status.title)}
                  value={data}
                  sx={{ p: "0 10px 0 0px  ", width: "24px", height: "24px" }}
                />
                <Typography variant="body1">{data}</Typography>
              </ListItem>
            ))}
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => handleClick(filter.gender.title)}
          sx={{ p: 0, height: "50px" }}
        >
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            Gender
          </Typography>
          {openGender ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openGender} timeout="auto" unmountOnExit sx={{ p: 0 }}>
          <List component="div" disablePadding>
            {filter.gender.data.map((data: any) => (
              <ListItemButton
                sx={{ p: 0, alignItems: "center", m: "20px 0px" }}
                key={data}
              >
                <Radio
                  checked={selectedValueGender === data}
                  onChange={(e) => handleChange(e, filter.gender.title)}
                  value={data}
                  sx={{ p: "0 10px 0 0px  ", width: "24px", height: "24px" }}
                />
                <Typography variant="body1">{data}</Typography>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
        <ListItemButton
          onClick={() => handleClick(filter.species.title)}
          sx={{ p: 0, height: "50px" }}
        >
          <Typography variant="body1" sx={{ flexGrow: 1 }}>
            Specie
          </Typography>
          {openSpecie ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={openSpecie} timeout="auto" unmountOnExit sx={{ p: 0 }}>
          <List component="div" disablePadding>
            {filter.species.data.map((data: any) => (
              <ListItemButton
                sx={{ p: 0, alignItems: "center", m: "20px 0px" }}
                key={data}
              >
                <Radio
                  checked={selectedValueSpecie === data}
                  onChange={(e) => handleChange(e, filter.species.title)}
                  value={data}
                  sx={{ p: "0 10px 0 0px  ", width: "24px", height: "24px" }}
                />
                <Typography variant="body1">{data}</Typography>
              </ListItemButton>
            ))}
          </List>
        </Collapse>
      </List>
    </Grid>
  );
};

export default Filter;
