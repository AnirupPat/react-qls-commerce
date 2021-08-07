import classes from "./index.module.css";
import { useSelector } from "react-redux";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cartReducer.items);
  return (
    <nav className={classes.navBar}>
      <span className={classes.logo}>QLS</span>
      <ul>
        <li>
          <span>About Us</span>
        </li>
        <li>
          <i className="fas fa-cart-plus fa-2x"></i>
          <span className={classes.qty}>{cartItems.length}</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
