import React from "react";
import { ListItemButton, Typography } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
interface TitleFilterByProps {
  title: string;
  isOpen: boolean;
  handleClick: (title: string) => void;
}

const TitleFilterBy = ({ title, isOpen, handleClick }: TitleFilterByProps) => {
  return (
    <ListItemButton
      onClick={() => handleClick(title)}
      sx={{ p: 0, height: "50px" }}
    >
      <Typography variant="body1" sx={{ flexGrow: 1 }}>
        {title}
      </Typography>
      {isOpen ? <ExpandLess /> : <ExpandMore />}
    </ListItemButton>
  );
};

export default TitleFilterBy;
