import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import NavBar from "./components/nav-bar";
import ProductList from "./components/product-list";
import { useSelector } from "react-redux";

const PRODUCTS = [
  {
    name: "Cap",
    price: 5,
  },
  {
    name: "HandBag",
    price: 30,
  },
  {
    name: "Shirt",
    price: 35,
  },
  {
    name: "Shoe",
    price: 50,
  },
  {
    name: "Pant",
    price: 35,
  },
  {
    name: "Slipper",
    price: 25,
  },
];
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
