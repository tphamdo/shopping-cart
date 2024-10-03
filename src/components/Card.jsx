import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './products.module.css';
import { useProducts } from '../ProductsContext';
import CountIncrementor from './CountIncrementor';

function Card({ product }) {
  const { addToCart } = useProducts();

  return (
    <div className={styles.product} data-product-id={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} />
      </Link>
      <p className={styles.price}>${product.price}</p>
      {product.count > 0 && <CountIncrementor productId={product.id} />}
      {product.count <= 0 && (
        <input
          type="submit"
          value="Add to Cart"
          onClick={() => addToCart(product.id)}
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
    count: PropTypes.number.isRequired,
  }),
};

export default Card;
