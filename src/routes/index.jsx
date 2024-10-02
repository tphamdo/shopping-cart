import { Link } from 'react-router-dom';

function Index() {
  return (
    <Link to={'products'}>
      <button>Shop now</button>
    </Link>
  );
}

export default Index;
