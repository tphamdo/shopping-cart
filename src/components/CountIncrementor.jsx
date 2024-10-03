import styles from './count-incrementor.module.css';
import PropTypes from 'prop-types';
import { useProducts } from '../ProductsContext';

function CountIncrementor({ productId }) {
  const { products, decrementQty, incrementQty, changeQty } = useProducts();
  const count = products.find((p) => p.id == productId).count;

  function handleQuantityChange(event) {
    event.preventDefault();
    let quantity = +event.target.closest('form').elements.count.value;
    changeQty(productId, quantity);
  }

  return (
    <form
      className={styles.counter}
      onSubmit={handleQuantityChange}
      onBlur={handleQuantityChange}
    >
      <div className={styles.counter}>
        <button
          type="button"
          onClick={() => decrementQty(productId)}
          className={`${styles.countButton} ${styles.decrement}`}
        >
          &minus;
        </button>
        <input
          id="count"
          type="number"
          defaultValue={count}
          key={count}
          className={styles.count}
        />
        <button
          type="button"
          onClick={() => incrementQty(productId)}
          className={`${styles.countButton} ${styles.increment}`}
        >
          &#43;
        </button>
      </div>
    </form>
  );
}

CountIncrementor.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default CountIncrementor;
