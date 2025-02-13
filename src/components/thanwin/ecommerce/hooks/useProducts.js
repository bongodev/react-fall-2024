import { useState, useEffect } from 'react';

const url =
  'https://api.freeapi.app/api/v1/public/randomproducts?page=1&limit=20';
export const useProducts = () => {
  const [state, setState] = useState({
    data: null,
    isLoading: false,
    error: false,
    isError: false,
  });

  useEffect(() => {
    async function getData() {
      try {
        setState((prev) => ({ ...prev, isLoading: true }));
        const response = await fetch(url);
        const data = await response.json();

        setState((prev) => ({
          ...prev,
          isLoading: false,
          data: data.data.data,
        }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          isLoading: false,
          isError: true,
          error: error,
        }));
      }
    }
    getData();
  }, []);

  return {
    ...state,
  };
};
