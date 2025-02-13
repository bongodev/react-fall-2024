import ProductList from './ProductList';
import FilterContainer from './FilterContainer';
import CartIcon from './CartIcon';
import Spinner from './Spinner';
import { EcommerceProvider, useEcommerceContext } from './ecommerContext';
import Cart from './Cart';

const Ecommerce = () => {
  return (
    <EcommerceProvider>
      <Content />
    </EcommerceProvider>
  );
};

const Content = () => {
  const { isLoading } = useEcommerceContext();
  if (isLoading) {
    return (
      <div className="bg-gray-100 py-6 h-screen">
        <Spinner />
      </div>
    );
  }
  return (
    <section className="w-full px-6 py-4 bg-gray-100 relative">
      <div className="flex justify-between items-center">
        <h1 className="flex-1 text-xl tracking-widest font-bold  text-slate-900 text-center my-6">
          Win Store
        </h1>
        <CartIcon />
      </div>
      <div>
        <FilterContainer />
        <ProductList />
      </div>
      <Cart />
    </section>
  );
};

export default Ecommerce;
