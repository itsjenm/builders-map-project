import React, { useState } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Menu,
  Button,
} from "@mui/material";
import { Lock } from "@mui/icons-material";
import { useValue } from "../context/ContextProvider";
import { UserIcons } from "./user/UserIcons";
import Sidebar from "./sidebar/Sidebar";
import MenuIcon from '@mui/icons-material/Menu';

export const NavBar = () => {
  const {
    state: { currentUser },
    dispatch,
  } = useValue();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AppBar style={{ backgroundColor: "darkslateblue" }}>
        <Container maxWidth="lg" className="header">
          <Toolbar disableGutters>
            <Box sx={{ mr: 1 }}>
              <MenuIcon
                size="large"
                color="inherit"
                style={{margin: "0 30px 0 0"}}
                onClick={() => setIsOpen(true)}
              >
                
                <Menu />
              </MenuIcon>
            </Box>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", fontFamily: "monospace" },
              }}
            >
              N&W Builders
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              noWrap
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none", fontFamily: "monospace" },
              }}
            >
              N&W Builders
            </Typography>
            {!currentUser ? (
              <Button
                color="inherit"
                startIcon={<Lock />}
                onClick={() => dispatch({ type: "OPEN_LOGIN" })}
              >
                Login
              </Button>
            ) : (
              <UserIcons />
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
      <Sidebar {...{ isOpen, setIsOpen }} />
    </>
  );
};

export default NavBar;
