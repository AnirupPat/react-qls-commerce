import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import NavBar from "./components/nav-bar";
import ProductList from "./components/product-list";
import { useSelector } from "react-redux";

function App() {
  const products = useSelector((state) => state.cartReducer.products);

  return (
    <React.Fragment>
      <NavBar />
      <ProductList products={products} />
    </React.Fragment>
  );
}

export default App;
