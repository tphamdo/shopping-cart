import { useParams } from 'react-router-dom';
import { useProducts } from '../ProductsContext';
import styles from './product.module.css';
import CountIncrementor from './CountIncrementor';

function Product() {
  const { productId } = useParams();
  const { products, incrementQty, loading } = useProducts();
  if (loading) return <p>Loading...</p>;

  const product = products.find((p) => p.id == productId);
  return (
    <div className={styles['page-container']}>
      <div className={styles['product-container']}>
        <div key={product.id} className={styles.product}>
          <img src={product.image} />
          <div className={styles.productDetails}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.price}>${product.price}</p>
            <p>{product.description}</p>
            {product.count > 0 && <CountIncrementor productId={product.id} />}
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
