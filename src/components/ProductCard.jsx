import React from "react";
import { Box, Typography, Rating } from "@mui/material";
import { keyframes } from "@mui/system";

const ProductCard = ({ product }) => {
  const ratingValue =
    product.rating && !isNaN(Number(product.rating))
      ? Number(product.rating)
      : null;

  return (
    <Box className="product-card-wrapper" sx={mainbox}>
      <Box
        component="img"
        src={
          product.image_link ||
          product?.api_featured_image
        }
        alt={product.name || "Product Image"}
        sx={productimg}
      />

      <Typography sx={productname}>{product.name}</Typography>

      {ratingValue !== null && (
        <Rating
          name="product-rating"
          value={ratingValue}
          readOnly
          precision={0.1}
          size="small"
          sx={{
            mt: 1,
            color: "#ff9800",
          }}
        />
      )}

      <Typography sx={{ margin: "0.2em 0", fontWeight: 500 }}>
        <strong>Price:</strong> {product.price_sign}
        {product.price}
      </Typography>

      <Typography variant="body2" sx={productdescription}>
        {product.description || "No description"}
      </Typography>
    </Box>
  );
};

export default ProductCard;

// 🔥 Gradient animation for border
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const mainbox = {
  position: "relative",
  borderRadius: "10px",
  background: "white",
  padding: "1.2em",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  width: { xs: "90%", sm: "220px" },
  minHeight: "280px",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  overflow: "hidden",

  "&:hover": {
    transform: "translateY(-5px) scale(1.03)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
  },

  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    padding: "2px",
    background: "linear-gradient(270deg, #1976d2, #ff4081, #ff9800, #4caf50)",
    backgroundSize: "400% 400%",
    animation: `${gradientAnimation} 6s ease infinite`,
    WebkitMask:
      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
    WebkitMaskComposite: "xor",
    maskComposite: "exclude",
    zIndex: 0,
  },

  "& > *": {
    position: "relative",
    zIndex: 1,
  },
};

const productimg = {
  width: 150,
  height: 150,
  objectFit: "cover",
  borderRadius: "8px",
  background: "#fafafa",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
  },
};

const productname = {
  display: "-webkit-box",
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "0.9em",
  color: "#333",
  marginTop: "0.5em",
  width: "200px",
  textAlign: "center",
  fontWeight: 600,
};

const productdescription = {
  display: "-webkit-box",
  WebkitLineClamp: 4,
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: "0.85em",
  color: "#666",
  marginTop: "0.5em",
  width: "200px",
};
