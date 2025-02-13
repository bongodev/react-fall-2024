import { useState, useEffect, createContext, useContext } from 'react';
import { useProducts } from './hooks/useProducts';

const ecommerceContext = createContext(undefined);
const getCategories = (products) => {
  return Array.from(new Set(products?.map((product) => product.category)));
};

export const EcommerceProvider = ({ children }) => {
  const { data: products, isLoading } = useProducts();
  const [productList, setProductList] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const categories = getCategories(products);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [cartItems, setCartItems] = useState(() => {
    const carts = localStorage.getItem('carts');
    if (carts) {
      return JSON.parse(carts);
    } else {
      return [];
    }
  });

  function toggleShowCart() {
    setShowCart(!showCart);
    console.log(showCart);
  }

  function handleFilter(category) {
    const newSelectedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter((item) => item !== category)
      : [...selectedCategories, category];
    console.log(newSelectedCategories);
    setSelectedCategories(newSelectedCategories);
    const productList = products.filter((product) =>
      newSelectedCategories.includes(product.category)
    );
    if (newSelectedCategories.length > 0) {
      setProductList(productList);
    } else {
      setProductList(products);
    }
  }
  function handleClear() {
    setProductList(products);
    setSelectedCategories([]);
  }
  function handleAddToCart(productId) {
    const product = products.find((item) => item.id === productId);
    const newCartItems = [...cartItems, { ...product, quantity: 1 }];
    if (!cartItems.includes(productId)) {
      setCartItems(newCartItems);
    }
    localStorage.setItem('carts', JSON.stringify(newCartItems));
  }
  function increaseQuantity(id) {
    const newCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(newCartItems);
    localStorage.setItem('carts', JSON.stringify(newCartItems));
  }
  function decreaseQuantity(id) {
    const newCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(newCartItems);
    localStorage.setItem('carts', JSON.stringify(newCartItems));
  }
  function removeItem(id) {
    const newCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(newCartItems);
    localStorage.setItem('carts', JSON.stringify(newCartItems));
  }

  useEffect(() => {
    setProductList(products);
  }, [products]);

  return (
    <ecommerceContext.Provider
      value={{
        handleFilter,
        selectedCategories,
        handleClear,
        handleAddToCart,
        cartItems,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
        toggleShowCart,
        isLoading,
        productList,
        categories,
        showCart,
      }}
    >
      {children}
    </ecommerceContext.Provider>
  );
};

export const useEcommerceContext = () => {
  const context = useContext(ecommerceContext);
  if (!context) {
    throw Error(
      'useEcommerce context should be used within Ecommerce component'
    );
  }
  return context;
};
