import React, { useRef } from "react";
import Slider from "react-slick";
import BrandCard from "./BrandCard";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { name: "Annabelle", key: "annabelle" },
  { name: "Covergirl", key: "covergirl" },
  { name: "Dior", key: "dior" },
  { name: "Glossier", key: "glossier" },
  { name: "L'Oreal", key: "l'oreal" },
  { name: "Maybelline", key: "maybelline" },
  { name: "Revlon", key: "revlon" },
];

const styles = {
  wrapper: {
    my: { xs: 3, sm: 5 },
    mb: 2,
  },
  brandBox: {
    cursor: "pointer",
    px: 1,
    mb: 5,
    "&:hover": {
      color: "white",
      "& .brand-card": {
        backgroundColor: "#fff",
        color: "#000",
        transform: "scale(1.05)",
        transition: "all 0.3s ease",
      },
    },
  },
};

const settings = {
  dots: false,
  infinite: true,
  speed: 800,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  pauseOnHover: false,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 3 } },
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

export default function BrandList() {
  const sliderRef = useRef(null);
  const navigate = useNavigate();

  return (
    <Box
      onMouseEnter={() => sliderRef.current?.slickPause()}
      onMouseLeave={() => sliderRef.current?.slickPlay()}
      sx={styles.wrapper}
    >
      <Slider ref={sliderRef} {...settings}>
        {brands.map((brand) => (
          <Box
            key={brand.key}
            onClick={() => navigate(`/brand/${brand.key}`)}
            sx={styles.brandBox}
          >
            <BrandCard brand={brand} className="brand-card" />
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
