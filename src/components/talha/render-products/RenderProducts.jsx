import { useEffect, useState } from 'react';

export const RenderProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      alert('Error fetching data');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {products.map((product) => (
        <p className='bg-white text-black font-bold py-1 px-2' key={product.name}>{product.name}</p>
      ))}
    </div>
  );
};
