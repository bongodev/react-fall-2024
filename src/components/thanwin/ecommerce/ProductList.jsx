import { useEcommerceContext } from './Ecommerce';
import Product from './Product';

const ProductList = ({ products }) => {
  const { handleAddToCart, cartItems } = useEcommerceContext();

  return (
    <div className="grid grid-cols-2  gap-4">
      {products?.map((product) => {
        const selectedProduct = cartItems.find(
          (item) => item.id === product.id
        );

        return (
          <Product
            key={product.id}
            imgSrc={product.url}
            title={product.title}
            id={product.id}
            price={product.price}
            addToCart={handleAddToCart}
            isAdded={selectedProduct ? true : false}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
