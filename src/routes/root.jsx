import { Outlet } from 'react-router-dom';
import { ProductsContextProvider } from '../ProductsContext';
import NavBar from '../components/navbar';

function Root() {
  return (
    <ProductsContextProvider>
      <NavBar />
      <Outlet />
    </ProductsContextProvider>
  );
}

export default Root;
