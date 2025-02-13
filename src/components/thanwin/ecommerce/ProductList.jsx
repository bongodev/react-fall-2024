import { useEcommerceContext } from './ecommerContext';
import Product from './Product';

const ProductList = () => {
  const { handleAddToCart, cartItems, productList } = useEcommerceContext();

  return (
    <div className="grid grid-cols-2  gap-4">
      {productList?.map((product) => {
        const selectedProduct = cartItems.find(
          (item) => item.id === product.id
        );

        return (
          <Product
            key={product.id}
            imgSrc={product.images[0]}
            title={product.title}
            id={product.id}
            price={product.price}
            addToCart={handleAddToCart}
            isAdded={selectedProduct ? true : false}
            description={product.description}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
