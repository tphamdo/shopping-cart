import styles from './navbar.module.css';
import { Link, NavLink } from 'react-router-dom';
import { useProducts } from '../ProductsContext';

function NavBar() {
  const { products } = useProducts();
  const cartCount = products.reduce(
    (curCount, product) => (product.count > 0 ? 1 : 0) + curCount,
    0,
  );

  return (
    <div className={styles.navContainer}>
      <nav className={styles.links}>
        <Link className={`${styles.navLink} ${styles.logo}`} to="">
          Simple Style
        </Link>
        <NavLink className={styles.navLink} to="products">
          Products
        </NavLink>
        <Link className={styles.navLink} to="checkout">
          <i className="fa">
            &#xf07a;
            <span
              className={`${styles.badge} ${cartCount > 0 ? styles.visible : ''}`}
            >
              {getCartCount(cartCount)}
            </span>
          </i>
        </Link>
      </nav>
    </div>
  );
}

function getCartCount(count) {
  if (count <= 0) return '0';
  if (count > 9) return '9+';
  return count;
}

export default NavBar;
