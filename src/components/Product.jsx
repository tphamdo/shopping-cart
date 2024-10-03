import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../ProductsContext';
import styles from './product.module.css';
import CountIncrementor from './CountIncrementor';
import ReactStars from 'react-rating-stars-component';

function Product() {
  const { productId } = useParams();
  const { products, incrementQty, loading } = useProducts();
  if (loading) return <p>Loading...</p>;

  const product = products.find((p) => p.id == productId);
  console.log(product);
  console.log(product.rating);
  return (
    <div className={styles['page-container']}>
      <div className={styles['product-container']}>
        <div key={product.id} className={styles.product}>
          <img src={product.image} />
          <div className={styles.productDetails}>
            <p className={styles.title}>{product.title}</p>
            <div className={styles.ratingContainer}>
              <p>{product.rating.rate}</p>
              <ReactStars
                count={5}
                size={20}
                activeColor="#de7921"
                isHalf={true}
                edit={false}
                value={product.rating.rate}
              />
            </div>
            <p className={styles.price}>${product.price}</p>
            <p className={styles.description}>{product.description}</p>
            {product.count > 0 && (
              <>
                <div className={styles.countContainer}>
                  <CountIncrementor productId={product.id} />
                  <p className={styles.cartMessage}>Added to cart!</p>
                </div>
                <Link to="/checkout">
                  <button className={styles.checkoutButton}>
                    Proceed to checkout
                  </button>
                </Link>
              </>
            )}
            {product.count == 0 && (
              <button
                className={styles.addToCart}
                onClick={() => incrementQty(product.id)}
              >
                Add to Cart!
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
