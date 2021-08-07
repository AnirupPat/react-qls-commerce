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

const products = [...PRODUCTS].map((product, index) => {
  product.id = index + 1;
  product.image = `/images/items/${product.name.toLocaleLowerCase()}.png`;
  product.cartQuantity = 0;
  return product;
});

const cartInitialState = {
  items: [],
  products,
};

const cartReducer = (state = cartInitialState, action) => {
  if (action.type === "ADD") {
    console.log(action);
  }
  return cartInitialState;
};

export default cartReducer;
