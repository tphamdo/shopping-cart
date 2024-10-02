import { Link, useRouteError } from 'react-router-dom';
import styles from './error-page.module.css';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id={styles.errorPage}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <p>
        Go back <Link to="/">Home</Link>
      </p>
    </div>
  );
}

export default ErrorPage;
