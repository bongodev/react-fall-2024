import ProductList from './ProductList';
import { createContext, useContext, useEffect, useState } from 'react';
import FilterContainer from './FilterContainer';
import Cart from './Cart';
import CartIcon from './CartIcon';
import { useProducts } from './useProducts';

const ecommerceContext = createContext(undefined);
const getCategories = (products) => {
  return Array.from(new Set(products?.map((product) => product.category)));
};
const Ecommerce = () => {
  const { data: products, isLoading } = useProducts();
  const [productList, setProductList] = useState([]);
  console.log(productList);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const [cartItems, setCartItems] = useState(() => {
    const carts = localStorage.getItem('carts');
    if (carts) {
      return JSON.parse(carts);
    } else {
      return [];
    }
  });
  const [showCart, setShowCart] = useState(false);

  function toggleShowCart() {
    setShowCart(!showCart);
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

  if (isLoading) {
    return <h1 className="">Loading...</h1>;
  }
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
      }}
    >
      <section className="w-full px-6 py-4 bg-blue-100 relative">
        <div className="flex justify-between items-center">
          <h1 className="flex-1 text-2xl tracking-wider font-bold text-slate-600 text-center my-6">
            Win Store
          </h1>
          <CartIcon showCart={toggleShowCart} count={cartItems.length} />
        </div>
        <div>
          <FilterContainer categories={getCategories(products)} />
          <ProductList products={productList} />
        </div>
        {showCart && (
          <div className="w-full absolute top-20">
            <Cart className="w-[80%]" />
          </div>
        )}
      </section>
    </ecommerceContext.Provider>
  );
};

export default Ecommerce;

export const useEcommerceContext = () => {
  const context = useContext(ecommerceContext);
  if (!context) {
    throw Error(
      'useEcommerce context should be used within Ecommerce component'
    );
  }
  return context;
};
