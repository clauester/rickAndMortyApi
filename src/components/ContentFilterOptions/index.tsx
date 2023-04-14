import React from "react";
import {
  Collapse,
  List,
  ListItemButton,
  Radio,
  Typography,
} from "@mui/material";

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
  return (
    <Collapse in={isOpen} timeout="auto" unmountOnExit sx={{ p: 0 }}>
      <List component="div" disablePadding>
        {list.map((data: string) => (
          <ListItemButton
            sx={{ p: 0, alignItems: "center", m: "20px 0px" }}
            key={data}
          >
            <Radio
              checked={isChecked(title, data)}
              onChange={(e) => handleChange(e, title)}
              value={data}
              sx={{ p: "0 10px 0 0px  ", width: "24px", height: "24px" }}
            />
            <Typography variant="body1">{data}</Typography>
          </ListItemButton>
        ))}
      </List>
    </Collapse>
  );
};

export default ContentFilterOptions;
