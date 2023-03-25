import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/Images/g115.svg";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightlightIcon from "@mui/icons-material/Nightlight";
import Content from "../Content/Index";
import { Link } from "react-router-dom";
import { navbar_pages } from "../../utils/constans/Index";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { useState, useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Navbar = () => {
  const { theme, handleTheme } = useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
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
                <img src={logo} width="150px" height="46px" />
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
                    onClick={handleCloseNavMenu}
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
                <IconButton onClick={handleOpenUserMenu}>
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
              <IconButton size="large" onClick={handleOpenNavMenu}>
                <MenuIcon color="primary" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {navbar_pages.map((page) => (
                  <Link
                    to={page.link}
                    style={{ textDecoration: "none" }}
                    key={page.name}
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Button onClick={handleCloseNavMenu}>
                        <Typography>{page.name}</Typography>
                      </Button>
                    </MenuItem>
                  </Link>
                ))}
                <MenuItem onClick={handleCloseNavMenu}>
                  <Tooltip title="Dark Mode">
                    <IconButton
                      onClick={handleTheme}
                      sx={{ p: 0, marginRight: "20px" }}
                    >
                      <NightlightIcon
                        sx={{
                          display: { xs: "flex", md: "none" },
                        }}
                        color="primary"
                      />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="GitHub">
                    <IconButton onClick={handleOpenUserMenu}>
                      <GitHubIcon
                        sx={{
                          display: { xs: "flex", md: "none" },
                        }}
                        color="primary"
                      />
                    </IconButton>
                  </Tooltip>
                </MenuItem>
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </Content>
    </AppBar>
  );
};

export default Navbar;
