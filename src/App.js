import React, { useState, useEffect } from "react";
import classes from "./App.module.css";
import NavBar from "./components/nav-bar";
import ProductList from "./components/product-list";

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
  const [state, setState] = useState({
    cart: {
      items: [],
    },
    products: [],
  });
  const products = [...PRODUCTS].map((product, index) => {
    product.id = index + 1;
    product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
    product.cartQuantity = 0;
    return product;
  });
  useEffect(() => {
    setState({
      cart: {
        items: [],
      },
      products,
    });
  }, []);

  return (
    <React.Fragment>
      <NavBar />
      <ProductList products={state.products} />
    </React.Fragment>
  );
}

export default App;
