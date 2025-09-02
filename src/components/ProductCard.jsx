import React from "react";
import { Box, Typography } from "@mui/material";

const ProductCard = ({ product }) => (
  <Box
    className="product-card-wrapper"
    sx={mainbox}
  >
    <Box
      component="img"
      src={product.image_link}
      alt={product.name}
      sx={productimg}
    />

    <Typography
      sx={productname}
    >
      {product.name}
    </Typography>

    <Typography sx={{ margin: "0.2em 0", fontWeight: 500 }}>
      <strong>Price:</strong> {product.price_sign}
      {product.price}
    </Typography>

    <Typography
      variant="body2"
      sx={productdescription}
    >
      {product.description || "No description"}
    </Typography>
  </Box>
);

export default ProductCard;


const mainbox  = {
 borderTop: "2px solid #1976d2",
      borderRight: "2px solid black",
      borderBottom: "2px solid #1976d2",
      borderLeft: "2px solid black",
      borderRadius: "12px", 
      background: "white",
      padding: "1.2em",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      width: { xs: "90%", sm: "220px" },
      minHeight: "280px",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      "&:hover": {
        transform: "translateY(-5px) scale(1.03)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
      },
}


const productimg = {
    width: 150,
        height: 150,
        objectFit: "cover",
        borderRadius: "8px",
        background: "#fafafa",
        transition: "transform 0.3s ease",
}


const productname = {
   display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "0.9em",
        color: "#666",
        marginTop: "0.5em",
        width: "200px",
        textAlign: "center",
        fontWeight: 500,
}


const productdescription = {
   display: "-webkit-box",
        WebkitLineClamp: 4,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        fontSize: "0.9em",
        color: "#666",
        marginTop: "0.5em",
        width: "200px", 
}