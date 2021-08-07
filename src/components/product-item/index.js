import classes from "./index.module.css";
import { useSelector, useDispatch } from "react-redux";

const ProductItem = ({ item }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartReducer.items);
  console.log(cartItems);
  const inCart = cartItems.find((cartItem) => cartItem.id === item.id);
  if (!inCart) {
    item.cartQuantity = 0;
  }
  const handlerAddQty = () => {
    dispatch({ type: "ADD", value: item });
  };
  const handlerAddToCart = () => {
    dispatch({ type: "ADD", value: item });
  };
  const handlerRemoveQty = () => {
    dispatch({ type: "REMOVE", value: item });
  };
  return (
    <div className={classes.item}>
      <h3>{item.name}</h3>
      <img src={item.image} alt="" />
      <p>${item.price}</p>
      <div className={classes.cartQuantity}>
        <button onClick={handlerAddQty}>+</button>
        <p>{item.cartQuantity}</p>
        <button onClick={handlerRemoveQty}>-</button>
      </div>
      {!inCart && (
        <button onClick={handlerAddToCart} className={classes.addToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductItem;
