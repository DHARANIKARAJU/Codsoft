import React, { useState } from "react";
import {AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // hndle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"white"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
      
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/home"}>
            Home
          </NavLink>
        </li>
       
        <li>
          <NavLink to={"/about"}>About</NavLink>
        </li>
        
        <li>
          <NavLink to={"/login"}>Login</NavLink>
        </li>
       
      </ul>
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
            QUIZ MAKER APP
            </Typography>
            
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink to={"/home"}>HOME</NavLink>
                </li>
              
                <li>
                  <NavLink to={"/about"}>ABOUT</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>LOGIN</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default NavBar;