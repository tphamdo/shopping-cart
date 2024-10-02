import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { addProducts } from './products';

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/?limit=5')
      .then((response) => {
        if (response.status >= 400) {
          throw new Error('server error');
        }
        return response.json();
      })
      .then((json) => {
        console.log(json);
        let products = json.map((p) => ({ ...p, count: 0 }));
        setProducts(products);
        // addProducts(products);
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts, loading, error }}>
      {children}
    </ProductsContext.Provider>
  );
}

ProductsContextProvider.propTypes = {
  children: PropTypes.any,
};

export function useProducts() {
  return useContext(ProductsContext);
}
