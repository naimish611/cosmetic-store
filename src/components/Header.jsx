import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { NavLink } from "react-router-dom";

const styles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  logo: {
    color: "inherit",
    textDecoration: "none",
    fontWeight: 700,
    letterSpacing: 2,
    fontFamily: "'Montserrat', 'Roboto', sans-serif",
    "&:hover": {
      opacity: 0.8,
      color: "white",
    },
  },
};

export default function Header() {
  return (
    <AppBar position="sticky" color="primary" elevation={4}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Typography component={NavLink} to="/" sx={styles.logo}>
            Cosmetic Store
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
