import Products from '../components/Products';
import { useProducts } from '../ProductsContext';

function ProductsPage() {
  const { products, loading, error } = useProducts();
  if (error) return <p>Sorry, something went wrong loading the data.</p>;
  if (loading) return <p>Loading...</p>;

  return <Products products={products} />;
}

export default ProductsPage;
