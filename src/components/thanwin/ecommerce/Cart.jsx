import CartItem from './CartItem';

import { X } from 'lucide-react';
import { useEcommerceContext } from './ecommerContext';

const Cart = ({ className }) => {
  const {
    showCart,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeItem,
    toggleShowCart,
  } = useEcommerceContext();
  const isCartEmpty = cartItems.length === 0;
  const totalPrice = cartItems.reduce(
    (prev, curr) => prev + curr.quantity * curr.price,
    0
  );

  return (
    <>
      {showCart && (
        <div className="w-full absolute top-20">
          <div
            className={`bg-white shadow-md px-4 py-6 m-4 rounded-md border-2 border-slate-300 w-[80%]  ${className}`}
          >
            <div className="flex">
              <p className="flex-1 text-center  text-slate-700 font-extrabold mb-2">
                My Shopping Cart
              </p>
              <X
                onClick={toggleShowCart}
                className="text-slate-600 hover:text-slate-800 cursor-pointer"
              />
            </div>
            {isCartEmpty && (
              <p className="text-slate-600 text-center">Your cart is empty</p>
            )}
            {!isCartEmpty && (
              <>
                <ul className="space-y-2">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      id={item.id}
                      itemName={item.title}
                      price={item.price}
                      quantity={item.quantity}
                      increaseQuantity={increaseQuantity}
                      decreaseQuantity={decreaseQuantity}
                      removeItem={removeItem}
                    />
                  ))}
                </ul>
                <div className="border text-slate-300 my-2" />
                <div className="flex justify-end gap-4 text-slate-800">
                  <span className="font-bold">Total : </span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </>
            )}
            <button className="w-full text-sm px-4 py-2 rounded-md bg-slate-600 hover:bg-slate-800 my-3 text-slate-200">
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
