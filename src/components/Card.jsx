import PropTypes from 'prop-types';
import styles from './products.module.css';
import { useProducts } from '../ProductsContext';
import CountIncrementor from './CountIncrementor';

function Card({ product }) {
  const { setProducts } = useProducts();

  function handleAddToCart(event) {
    let productId = event.target.closest('[data-product-id]').dataset.productId;
    console.log(productId);
    setProducts((products) =>
      products.map((p) => (p.id == productId ? { ...p, count: 1 } : p)),
    );
  }

  return (
    <div className={styles.product} data-product-id={product.id}>
      <img src={product.image} />
      <p>${product.price}</p>
      {product.count > 0 && <CountIncrementor productId={product.id} />}
      {product.count <= 0 && (
        <input
          type="submit"
          value="Add to Cart"
          onClick={handleAddToCart}
          className={styles.addToCart}
        />
      )}
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    // description: PropTypes.string.isRequired,
    // rating: PropTypes.shape({
    //   rate: PropTypes.number.isRequired,
    // }),
  }),
};

export default Card;
