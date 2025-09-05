import { Card, CardActionArea, Typography, Box, Grow } from "@mui/material";
import { useNavigate } from "react-router-dom";


export default function BrandCard({ brand }) {
  const navigate = useNavigate();

  return (
    <Grow in timeout={900}>
      <Card sx={styles.card}>
        <CardActionArea
          sx={{ height: "100%", p: 0 }}
          onClick={() => navigate(`/brand/${brand.key}`)}
        >
          <Box sx={styles.box}>
            <Typography className="brand-name" sx={styles.brandName}>
              {brand.name}
            </Typography>
          </Box>
        </CardActionArea>
      </Card>
    </Grow>
  );
}


const styles = {
  card: {
    borderRadius: 8,
    border: "1px solid #1976d2",
    height: "50%",
    padding: "2px",
    outline: "none",
    transition:
      "transform 0.22s cubic-bezier(.4,2,.5,.9), box-shadow 0.18s, background 0.3s",
    "&:hover": {
      transform: "scale(1.08)",
      background: "linear-gradient(90deg, #ff4081, #3933dc)",
      "& .brand-name": {
        color: "#fff",
      },
    },
  },

  box: {
    minHeight: { xs: 80, md: 80 },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },

  brandName: {
    px: 1,
    fontWeight: 700,
    fontFamily: "Roboto",
    color: "primary.main",
    letterSpacing: 2,
    fontSize: {
      xs: "1.5rem",
      sm: "1.5rem",
      md: "2rem",
      lg: "1.5rem",
    },
    transition: "color 0.3s ease",
    cursor: "pointer",
    "&:hover": {
      color: "secondary.main",
    },
  },
};