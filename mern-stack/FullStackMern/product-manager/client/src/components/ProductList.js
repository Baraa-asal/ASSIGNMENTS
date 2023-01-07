import React from "react";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  return (
    <div>
      <h3>All products:</h3>
      {props.products.map((product, i) => (
        <div key={i}>
          <Link to={`/products/${product._id}`}>{product.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
