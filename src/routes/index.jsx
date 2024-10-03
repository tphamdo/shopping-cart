import { Link } from 'react-router-dom';
import styles from './index.module.css';

function Index() {
  return (
    <div className={styles['home-page-container']}>
      <div className={styles.content}>
        <h1>Simple. Comfort.</h1>
        <Link to={'products'}>
          <button>Shop now</button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
