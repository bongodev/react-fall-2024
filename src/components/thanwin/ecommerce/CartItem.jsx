import { Plus, Minus, Trash2 } from 'lucide-react';
const CartItem = ({
  id = 0,
  itemName = 'itemName',
  quantity = 0,
  price = 20,
  increaseQuantity,
  decreaseQuantity,
  removeItem,
}) => {
  return (
    <li className="flex gap-4 justify-between text-sm  py-2  text-slate-700 rounded-md">
      <span className="flex-1 font-bold">{itemName}</span>
      <div className=" w-20 flex gap-3">
        <button onClick={() => increaseQuantity(id)} className="cursor-pointer">
          <Plus className="hover:text-slate-700 hover:bg-blue-100 hover:rounded-full" />
        </button>
        <span>{quantity}</span>
        <button
          disabled={quantity === 1}
          onClick={() => decreaseQuantity(id)}
          className="cursor-pointer "
        >
          <Minus
            className={` ${
              quantity === 1
                ? 'text-slate-400'
                : 'hover:text-slate-700 hover:bg-blue-100 hover:rounded-full'
            }`}
          />
        </button>
      </div>
      <div className="w-20 flex justify-between gap-2">
        <span>${(price * quantity).toFixed(2)}</span>
        <button onClick={() => removeItem(id)}>
          <span>
            <Trash2
              className="p-1 cursor-pointer text-slate-500 hover:text-slate-100 hover:bg-red-400 hover:rounded-full"
              size={26}
            />
          </span>
        </button>
      </div>
    </li>
  );
};

export default CartItem;
