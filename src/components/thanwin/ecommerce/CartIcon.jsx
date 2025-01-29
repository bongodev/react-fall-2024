import { ShoppingCart } from 'lucide-react';
const CartIcon = ({ count, showCart }) => {
  return (
    <div className="relative p-4">
      <button
        onClick={showCart}
        className="cursor-pointer  text-slate-600 hover:text-slate-800 "
      >
        <ShoppingCart className="" />
        <span className="absolute top-0 right-0  font-bold ">{count}</span>
      </button>
    </div>
  );
};

export default CartIcon;
