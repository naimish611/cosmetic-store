import React, { useState, useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import BrandList from "../components/BrandList";

import img1 from "../assets/abstract-blur-shopping-mall.jpg";
import img2 from "../assets/cosmetics-composition-with-space-right.jpg";

const wrapperStyle = {
  textAlign: "center",
  animation: "scaleIn 0.8s ease-out",
};

const imageStyle = {
  width: "100%",
  height: "430px",
  objectFit: "cover",
  position: "absolute",
  top: 0,
  left: 0,
  transition: "opacity 0.8s ease-in-out",
};

const headingStyle = {
  fontWeight: 700,
  marginTop: "16px",
  fontSize: "1.3rem",
  background: "linear-gradient(90deg, #5e5c6c, #3933dc)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  textAlign: "center",
};

const keyframesStyle = `
@keyframes scaleIn {
  0% { transform: scale(0.8); opacity: 0; } 
  100% { transform: scale(1); opacity: 1; }
}
`;

export default function HomePage() {
  const images = [
    { src: img1, alt: "Shopping Mall" },
    { src: img2, alt: "Cosmetics" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 800);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Box sx={{ minHeight: "auto" }}>
      <style>{keyframesStyle}</style>

      <Box style={wrapperStyle}>
        <Grid container spacing={0} sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            sx={{ position: "relative", height: 430, width: "100vw" }}
          >
            <Box
              component="img"
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              style={{ ...imageStyle, opacity: fade ? 1 : 0 }}
            />
          </Grid>
        </Grid>

        <Typography style={headingStyle}>Our Brands</Typography>

        <Box sx={{ mt: 0 }}>
          <BrandList />
        </Box>
      </Box>
    </Box>
  );
}
