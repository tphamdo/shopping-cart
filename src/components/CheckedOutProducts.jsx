import { Link } from 'react-router-dom';
import { useProducts } from '../ProductsContext';
import PropTypes from 'prop-types';
import CountIncrementor from './CountIncrementor';
import styles from './checked-out-products.module.css';

function CheckedOutProduct({ product }) {
  return (
    <div key={product.id} className={styles.product}>
      <img src={product.image} style={{ height: '150px', width: '150px' }} />
      <div>
        <p>{product.title}</p>
        <CountIncrementor productId={product.id} />
      </div>
      <p className={styles.price}>{product.price}</p>
    </div>
  );
}

CheckedOutProduct.propTypes = {
  product: PropTypes.object,
};

function roundNumToNearestTwo(num) {
  return Math.round((num + Number.EPSILON) * 100) / 100;
}
function CheckedOutProducts() {
  const { products } = useProducts();
  let checkedOutProducts = products.filter((p) => p.count > 0);
  let totalPrice = checkedOutProducts.reduce(
    (total, p) => total + p.price * p.count,
    0,
  );
  totalPrice = roundNumToNearestTwo(totalPrice).toFixed(2);
  let totalItems = checkedOutProducts.reduce((total, p) => total + p.count, 0);

  console.log(checkedOutProducts.length);
  return (
    <div className={styles['page-container']}>
      <div className={styles['products-container']}>
        <h1>Checkout</h1>
        {checkedOutProducts.length > 0 && (
          <div className={styles.products}>
            {checkedOutProducts.map((p) => (
              <CheckedOutProduct key={p.id} product={p} />
            ))}
            <p
              className={styles.totalPrice}
            >{`Total (${totalItems} items): $${totalPrice}`}</p>
            <div className={styles.buttonContainer}>
              <button className={styles.checkout}>Checkout</button>
            </div>
          </div>
        )}
        {checkedOutProducts.length == 0 && (
          <div className={styles.noItems}>
            <p>No items currently in your cart</p>
            <Link to="/products">
              <button>Go shoping!</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckedOutProducts;
