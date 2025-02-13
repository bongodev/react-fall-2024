import { CircleCheckBig } from 'lucide-react';
const Product = ({
  imgSrc,
  title,
  price,
  addToCart,
  id,
  isAdded,
  description,
}) => {
  return (
    <article className="py-2 bg-white px-3 rounded-md flex flex-col gap-3 justify-between">
      <div className="w-full border py-1 rounded-md">
        <img className="w-full h-40 object-contain" src={imgSrc} />
      </div>
      <div>
        <h2 className="font-bold text-slate-800">{title}</h2>
        <p className="text-xm text-slate-600">{description}</p>
        <p className="text-slate-700 font-bold">${price}</p>
      </div>
      <div>
        {isAdded ? (
          <p className="my-2 w-full text-sm flex gap-4 justify-center text-center text-slate-800 px-4 py-2 bg-gray-200 rounded-md">
            <CircleCheckBig className="my-auto" size={20} />
            Added
          </p>
        ) : (
          <button
            className="py-2 text-sm my-2 w-full  bg-gray-600 hover:bg-gray-800  text-slate-200 rounded-md cursor-pointer "
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
