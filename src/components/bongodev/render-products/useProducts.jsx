import { useEffect, useState } from 'react';

export const useProducts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json'
    )
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => alert('Error fetching data'))
      .finally(() => setIsLoading(false));
  }, []);

  return { isLoading, products };
};
