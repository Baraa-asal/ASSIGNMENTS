import React, { useEffect, useState } from "react";
import PersonForm from "../components/PersonForm";
import ProductForm from "../components/ProductForm";

export default () => {
  return (
    <div>
      <PersonForm />
      <ProductForm />
    </div>
  );
};
