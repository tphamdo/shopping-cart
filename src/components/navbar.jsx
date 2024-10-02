import styles from './navbar.module.css';
import { NavLink } from 'react-router-dom';
import { useProducts } from '../ProductsContext';

function NavBar() {
  const { products } = useProducts();
  const cartCount = products.reduce(
    (curCount, product) => (product.count > 0 ? 1 : 0) + curCount,
    0,
  );

  return (
    <div>
      <nav className={styles.links}>
        <NavLink className={styles.navLink} to="">
          Home
        </NavLink>
        <NavLink className={styles.navLink} to="products">
          Products
        </NavLink>
        <NavLink className={styles.navLink} to="about">
          About
        </NavLink>
        <NavLink className={styles.navLink} to="cart">
          <i className="fa">
            &#xf07a;
            <span
              className={`${styles.badge} ${cartCount > 0 ? styles.visible : ''}`}
            >
              {getCartCount(cartCount)}
            </span>
          </i>
        </NavLink>
      </nav>
    </div>
  );
}

function getCartCount(count) {
  if (count <= 0) return '';
  if (count > 9) return '9+';
  return count;
}

export default NavBar;
