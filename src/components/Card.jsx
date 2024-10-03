import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './products.module.css';
import ReactStars from 'react-rating-stars-component';

function Card({ product }) {
  return (
    <div className={styles.product} data-product-id={product.id}>
      <Link to={`/product/${product.id}`}>
        <img src={product.image} />
      </Link>
      <p className={styles.price}>${product.price}</p>
      <div className={styles.ratingContainer}>
        <ReactStars
          count={5}
          size={24}
          activeColor="#de7921"
          isHalf={true}
          edit={false}
          value={product.rating.rate}
        />
      </div>
    </div>
  );
}

Card.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    rating: PropTypes.object.isRequired,
  }),
};

export default Card;
