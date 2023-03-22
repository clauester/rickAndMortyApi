import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../pictures/logo.png";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import Content from "./Content";

const Navbar = () => {
  const pages = [
    { name: "Locations", link: "" },
    { name: "Episodes", link: "" },
    { name: "My favorites characters: ", link: "" },
  ];

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
  //max width 1200px, padding-left/right 20px, margin auto 0
  return (
    <AppBar elevation={0}>
      <Content>
        <Toolbar>
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <img src={logo} width="150px" height="46px" />
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,

                  display: "block",
                  fontFamily: "Poppins",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Dark Mode">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Brightness3Icon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                  }}
                />
              </IconButton>
            </Tooltip>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <GitHubIcon
                  sx={{
                    display: { xs: "none", md: "flex" },
                    mr: 1,
                  }}
                />
              </IconButton>
            </Tooltip>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <img src={logo} width="150px" height="46px" />
          </Box>
        </Toolbar>
      </Content>
    </AppBar>
  );
};

export default Navbar;
