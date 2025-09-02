import { Box, Container, Typography } from "@mui/material";

const styles = {
  footer: {
    backgroundColor: "#24292F",
    color: "#fff",
    width: "100%",
    position: "fixed",
    bottom: 0,
    left: 0,
    py: 2,
    textAlign: "center",
  },
  text: {
    margin: 0,
  },
};

export default function Footer() {
  return (
    <Box component="footer" sx={styles.footer}>
      <Container maxWidth="lg">
        <Typography sx={styles.text}>
          {new Date().getFullYear()} Your Company. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
