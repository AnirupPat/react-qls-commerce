import ProductItem from "../product-item";
import classes from "./index.module.css";

const ProductList = ({ products }) => {
  console.log(products);

  return (
    <div className={classes.main}>
      {products.map((item) => (
        <ProductItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ProductList;
