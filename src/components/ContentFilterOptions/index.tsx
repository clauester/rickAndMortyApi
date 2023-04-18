import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  Radio,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { colorStatus } from "../../utils/constans/Index";

interface ContentFilterOptionsProps {
  title: string;
  list: string[];
  isOpen: boolean;
  isChecked: (title: string, value: string) => boolean;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    title: string
  ) => void;
}

const ContentFilterOptions = ({
  title,
  list,
  isOpen,
  isChecked,
  handleChange,
}: ContentFilterOptionsProps) => {
  //console.log(title);
  const getColorStatus = (status: string) => {
    return colorStatus[status as keyof typeof colorStatus];
  };
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit sx={{ p: 0 }}>
      <List
        component="div"
        disablePadding
        sx={{ rowGap: "20px", display: "grid" }}
      >
        {list.map((data: string) => (
          <ListItemButton
            sx={{
              p: 0,
              alignItems: "center",
              marginLeft: "5px",
            }}
            key={data}
          >
            <Radio
              checked={isChecked(title, data)}
              onChange={(e) => handleChange(e, title)}
              value={data}
              sx={{ p: "0 10px 0 0px  ", width: "24px", height: "24px" }}
              checkedIcon={<CheckCircleIcon sx={{ color: "#74CB48" }} />}
            />

            <Typography variant="body1">{data}</Typography>
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );
};

export default ContentFilterOptions;
