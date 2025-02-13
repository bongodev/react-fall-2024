import { ShoppingCart } from 'lucide-react';
import { useEcommerceContext } from './ecommerContext';

const CartIcon = () => {
  const { toggleShowCart, cartItems } = useEcommerceContext();
  return (
    <div className="relative p-4">
      <button
        onClick={() => toggleShowCart()}
        className="cursor-pointer  text-slate-600 hover:text-slate-800 "
      >
        <ShoppingCart className="" />
        <span className="absolute top-0 right-0  font-bold ">
          {cartItems.length}
        </span>
      </button>
    </div>
  );
};

export default CartIcon;
