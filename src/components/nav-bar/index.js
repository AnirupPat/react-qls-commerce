import classes from "./index.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <span className={classes.logo}>QLS</span>
      <ul>
        <li>
          <span>About Us</span>
        </li>
        <li>
          <i className="fas fa-cart-plus fa-2x"></i>
          <span className={classes.qty}>0</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
