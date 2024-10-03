import Card from './Card';
import styles from './products.module.css';
import PropTypes from 'prop-types';

function Products({ products }) {
  return (
    <div className={styles['page-container']}>
      <div className={styles['section-container']}>
        <div className={styles.products}>
          {products.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

Products.propTypes = {
  products: PropTypes.array,
};

export default Products;
