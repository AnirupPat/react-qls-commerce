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
    if (state.items.length === 0) {
      ++action.value.cartQuantity;
      return {
        items: [action.value],
        products,
      };
    } else {
      const item = state.items.find((item) => item.id === action.value.id);
      if (!item) {
        console.log("item not found");
        ++action.value.cartQuantity;
        return {
          items: [...state.items, action.value],
          products,
        };
      } else {
        console.log("item found");
        let cartItems = [...state.items];
        for (let i of cartItems) {
          if (i.id === item.id) {
            ++i.cartQuantity;
          }
        }
        return {
          items: [...cartItems],
          products,
        };
      }
    }
  } else if (action.type === "REMOVE") {
    const item = state.items.find((item) => item.id === action.value.id);
    if (item) {
      if (item.cartQuantity > 1) {
        let cartItems = [...state.items];
        for (let i of cartItems) {
          if (i.id === item.id) {
            --i.cartQuantity;
          }
        }
        return {
          items: [...cartItems],
          products,
        };
      } else {
        const updatedItems = state.items.filter(
          (item) => item.id !== action.value.id
        );
        return {
          items: [...updatedItems],
          products,
        };
      }
    } else {
      return {
        items: [...state.items],
        products,
      };
    }
  }
  return cartInitialState;
};

export default cartReducer;
