import styles from './count-incrementor.module.css';
import PropTypes from 'prop-types';
import { useProducts } from '../ProductsContext';

function CountIncrementor({ productId }) {
  const { products, setProducts } = useProducts();
  const count = products.find((p) => p.id == productId).count;

  function handleDecrement() {
    setProducts((products) =>
      products.map((p) =>
        p.id == productId ? { ...p, count: p.count - 1 } : p,
      ),
    );
    console.log(productId);
  }

  function handleIncrement() {
    setProducts((products) =>
      products.map((p) =>
        p.id == productId ? { ...p, count: p.count + 1 } : p,
      ),
    );
  }

  function handleQuantityChange(event) {
    event.preventDefault();
    let quantity = +event.target.closest('form').elements.count.value;
    setProducts((products) =>
      products.map((p) => (p.id == productId ? { ...p, count: quantity } : p)),
    );
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
          onClick={handleDecrement}
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
          onClick={handleIncrement}
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
