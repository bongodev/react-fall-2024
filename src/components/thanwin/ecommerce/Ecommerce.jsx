import ProductList from './ProductList';
import FilterContainer from './FilterContainer';

import CartIcon from './CartIcon';

import { EcommerceProvider } from './ecommerContext';
import Cart from './Cart';

const Ecommerce = () => {
  return (
    <EcommerceProvider>
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
    </EcommerceProvider>
  );
};

export default Ecommerce;
