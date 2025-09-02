import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => (
  <div className="product-grid" style={{}}>
    {products.map((prod) => (
      <ProductCard key={prod.id} product={prod} />
    ))}
  </div>
);

export default ProductList;
