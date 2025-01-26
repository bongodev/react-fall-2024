import { useProducts } from './useProducts';

export const RenderProducts = () => {
  const { isLoading, products } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {products.map((product) => (
        <p key={product.name}>{product.name}</p>
      ))}
    </div>
  );
};
