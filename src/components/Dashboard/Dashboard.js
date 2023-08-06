import React from "react";
import { Outlet } from "react-router-dom";
import "./Dashboard.css";
import SidebarData from "./Sidebar/SidebarData";
import { LogOut } from "lucide-react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const pages = ["Products", "Pricing", "Blog"];
  const settings = ["Profile", "Account", "Dashboard", "Logout"];
  const currentURL = window.location.pathname;
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <div className="dashboardContainer">
      <AppBar
        style={{ background: "#fff", borderBottom: "1px solid #636369" }}
        position="static"
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h4"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#000",
                textDecoration: "none",
              }}
            >
              SMS
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#000"
              >
                <MenuIcon />
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
                {SidebarData.map((item) => (
                  <Button
                    key={item.id}
                    sty
                    variant={currentURL === item.path ? "contained" : "outline"}
                    onClick={() => navigate(`${item.path}`)}
                    startIcon={item.icon}
                    sx={{
                      ":hover": {
                        bgcolor: "#ededed", // theme.palette.primary.main
                        color: "#000",
                      },
                      my: 2,
                      color: currentURL === item.path ? "#FFF" : "#636369",
                      backgroundColor:
                        currentURL === item.path ? "#636369" : "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.name}
                  </Button>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "#000",
                textDecoration: "none",
              }}
            >
              SMS
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
              }}
            >
              {SidebarData.map((item) => (
                <Button
                  key={item.id}
                  variant={currentURL === item.path ? "contained" : "outline"}
                  onClick={() => navigate(`${item.path}`)}
                  startIcon={item.icon}
                  sx={{
                    ":hover": {
                      bgcolor: "#ededed", // theme.palette.primary.main
                      color: "#000",
                    },
                    my: 2,
                    color: currentURL === item.path ? "#FFF" : "#636369",
                    backgroundColor:
                      currentURL === item.path ? "#636369" : "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding:"8px 20px",
                    borderRadius: "30px",
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <div className="sidebarContent">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
