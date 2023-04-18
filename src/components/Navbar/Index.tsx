import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/Images/g115.svg";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Content from "../Content/Index";
import { Link } from "react-router-dom";
import { navbar_pages } from "../../utils/constans/Index";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { ListItemButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <AppBar elevation={0} sx={{ bgcolor: "background.paper" }}>
      <Content>
        <Toolbar
          style={{
            padding: "0px",
            minHeight: "50px",
          }}
        >
          <Box
            className="desktop-menu"
            sx={{ display: { xs: "none", md: "flex" } }}
            width="100%"
            alignItems={"center"}
          >
            <Box mr="10px">
              <Link to="/characters">
                <img
                  alt="Rick and Morty Logo"
                  src={logo}
                  width="150px"
                  height="46px"
                />
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {navbar_pages.map((page) => (
                <Link
                  to={page.link}
                  style={{ textDecoration: "none" }}
                  key={page.name}
                >
                  <Button
                    sx={{
                      my: 0,
                      mx: "4px",
                      display: "block",
                    }}
                  >
                    <Typography>{page.name}</Typography>
                  </Button>
                </Link>
              ))}
            </Box>

            <Box>
              <Tooltip title="Dark Mode">
                <IconButton
                  sx={{ p: 0, marginRight: "20px" }}
                  onClick={handleTheme}
                >
                  <NightlightIcon color="primary" />
                </IconButton>
              </Tooltip>
              <Tooltip title="GitHub">
                <IconButton>
                  <GitHubIcon color="primary" />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Box
            className="mobile-menu"
            sx={{ display: { xs: "flex", md: "none" } }}
            width="100%"
            alignItems={"center"}
          >
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/characters">
                <img src={logo} width="150px" height="46px" />
              </Link>
            </Box>

            <Box>
              {!open ? (
                <IconButton size="large" onClick={handleOpen}>
                  <MenuIcon color="primary" />
                </IconButton>
              ) : (
                <IconButton size="large" onClick={handleClose}>
                  <CloseIcon color="primary" />
                </IconButton>
              )}
            </Box>

            <Drawer
              variant="persistent"
              anchor="left"
              open={open}
              onClose={handleClose}
              PaperProps={{
                sx: {
                  width: "100%",
                  marginTop: "92.4px",
                  borderTopWidth: "1px",
                  borderTopStyle: "solid",
                },
              }}
            >
              {open ? (
                <Box sx={{ width: "100%", padding: "20px 20px" }}>
                  <List>
                    {navbar_pages.map((pages) => (
                      <Link
                        to={pages.link}
                        key={pages.name}
                        style={{ textDecoration: "none" }}
                        onClick={handleClose}
                      >
                        <ListItemButton sx={{ p: 0, height: "50px" }}>
                          <Typography color="primary" variant="subtitle1">
                            {pages.name}
                          </Typography>
                        </ListItemButton>
                      </Link>
                    ))}
                    <ListItemButton
                      sx={{ justifyContent: "center", padding: "20px 0px" }}
                    >
                      <Tooltip title="Dark Mode">
                        <IconButton
                          sx={{ p: 0, marginRight: "50px" }}
                          onClick={handleTheme}
                        >
                          <NightlightIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="GitHub">
                        <IconButton>
                          <GitHubIcon color="primary" />
                        </IconButton>
                      </Tooltip>
                    </ListItemButton>
                  </List>
                </Box>
              ) : null}
            </Drawer>
          </Box>
        </Toolbar>
      </Content>
    </AppBar>
  );
};

export default Navbar;
