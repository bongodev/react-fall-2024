import { CircleCheckBig } from 'lucide-react';
const Product = ({ imgSrc, title, price, addToCart, id, isAdded }) => {
  return (
    <article className="py-2 bg-white px-3 rounded-md flex flex-col gap-3 justify-between">
      <img className="w-full h-40 object-contain" src={imgSrc} />
      <div>
        <h2 className="text-xl font-bold text-slate-800">{title}</h2>
        <p className="text-slate-700">${price}</p>
      </div>
      <div>
        {isAdded ? (
          <p className="w-full flex gap-4 justify-center text-center text-blue-800 px-4 py-2 bg-blue-100 rounded-md">
            <CircleCheckBig className="my-auto" size={20} />
            Added
          </p>
        ) : (
          <button
            className="py-2 my-2 w-full  bg-slate-600 hover:bg-slate-800  text-slate-200 rounded-md cursor-pointer "
            onClick={() => addToCart(id)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </article>
  );
};

export default Product;
