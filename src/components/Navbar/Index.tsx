import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/images/logo.png";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import NightlightIcon from '@mui/icons-material/Nightlight';
import Content from "../Content/Index";

const Navbar = () => {
  const pages = [
    { name: "Locations", link: "" },
    { name: "Episodes", link: "" },
    { name: "My favorites characters: (2) ", link: "" },
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

  return (
    <AppBar elevation={0} sx={{bgcolor: 'background.paper'}}>
      <Content>
        <Toolbar style={{
          padding: "0px",
          minHeight: "50px",
        }}>
          <Box className="desktop-menu" sx={{ display: { xs: "none", md: "flex" }}} width="100%"  alignItems={"center"}>
            <Box mr="10px">
              <Link href="/">
                <img src={logo} width="150px" height="46px"/>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{
                    my: 0,
                    mx: "4px",
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
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0,marginRight: "20px" }}>
                  <NightlightIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                    color="primary"
                  />
                </IconButton>
              </Tooltip>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <GitHubIcon
                    sx={{
                      display: { xs: "none", md: "flex" },
                    }}
                    color="primary"
                  />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

          <Box className="mobile-menu" sx={{ display: { xs: "flex", md: "none" } }}>
            <Box >
              <img src={logo} width="150px" height="46px" />
            </Box>
          </Box>
        </Toolbar>
      </Content>
    </AppBar>
  );
};

export default Navbar;
