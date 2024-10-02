import { Form } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './products.module.css';
import { useProducts } from '../ProductsContext';

function Card({ product }) {
  const { setProducts } = useProducts();

  function handleAddToCart(event) {
    console.log(event.target.dataset.productId);
    let productId = event.target.dataset.productId;
    setProducts((products) =>
      products.map((p) => (p.id == productId ? { ...p, count: 1 } : p)),
    );
  }

  return (
    <div className={styles.product}>
      <h3>{product.title}</h3>
      <img src={product.image} />
      <p>${product.price}</p>
      {product.count > 0 && <p>Count: {product.count}</p>}
      {product.count <= 0 && (
        <input
          type="submit"
          value="Add to Cart"
          data-product-id={product.id}
          onClick={handleAddToCart}
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
