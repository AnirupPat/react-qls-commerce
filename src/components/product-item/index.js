import classes from "./index.module.css";

const ProductItem = ({ item }) => {
  const handlerAddQty = () => {
    console.log(item);
  };
  return (
    <div className={classes.item}>
      <h3>{item.name}</h3>
      <img src={item.image} alt="" />
      <p>${item.price}</p>
      <div className={classes.cartQuantity}>
        <button onClick={handlerAddQty}>+</button>
        <p>{item.cartQuantity}</p>
        <button>-</button>
      </div>
      <button className={classes.addToCart}>Add to Cart</button>
    </div>
  );
};

export default ProductItem;
