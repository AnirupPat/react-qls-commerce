import classes from "./index.module.css";

const ProductList = ({ products }) => {
  console.log(products);

  return (
    <div className={classes.main}>
      {products.map((item) => (
        <div className={classes.item}>
          <h3>{item.name}</h3>
          <img src={item.image} alt="" />
          <p>${item.price}</p>
          <div className={classes.cartQuantity}>
            <button>+</button>
            <p>{item.cartQuantity}</p>
            <button>-</button>
          </div>
          <button className={classes.addToCart}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
