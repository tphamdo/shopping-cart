import { createContext, useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const ProductsContext = createContext();

export function ProductsContextProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  function addToCart(productId) {
    setProducts((prods) =>
      prods.map((p) => (p.id == productId ? { ...p, count: 1 } : p)),
    );
  }

  function removeFromCart(productId) {
    setProducts((products) =>
      products.map((p) => (p.id == productId ? { ...p, count: 0 } : p)),
    );
  }

  function changeQty(productId, quantity) {
    setProducts((products) =>
      products.map((p) => (p.id == productId ? { ...p, count: quantity } : p)),
    );
  }

  function decrementQty(productId) {
    setProducts((prods) =>
      prods.map((p) => (p.id == productId ? { ...p, count: p.count - 1 } : p)),
    );
  }

  function incrementQty(productId) {
    setProducts((prods) =>
      prods.map((p) => (p.id == productId ? { ...p, count: p.count + 1 } : p)),
    );
  }

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/?limit=12')
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
      })
      .catch((error) => {
        console.error(error);
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        products,
        loading,
        error,
        addToCart,
        removeFromCart,
        changeQty,
        decrementQty,
        incrementQty,
      }}
    >
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
