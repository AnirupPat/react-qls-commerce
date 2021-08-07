import classes from "./index.module.css";

const NavBar = () => {
  return (
    <nav className={classes.navBar}>
      <span>QLS</span>
      <ul>
        <li>About Us</li>
        <li>
          <i class="fas fa-cart-plus fa-2x"></i>
          <span>0</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
