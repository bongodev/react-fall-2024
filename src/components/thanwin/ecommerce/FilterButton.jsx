import { useEcommerceContext } from './ecommerContext';

const FilterButton = ({ categoryName }) => {
  const { handleFilter, selectedCategories } = useEcommerceContext();
  return (
    <button
      onClick={() => handleFilter(categoryName)}
      className={`cursor-pointer  px-4 py-1   rounded-md ${
        selectedCategories.includes(categoryName)
          ? 'bg-gray-800 text-slate-100'
          : 'border border-gray-400 hover:bg-gray-800 hover:text-slate-100'
      } `}
    >
      {categoryName.substring(0, 1).toUpperCase() + categoryName.substring(1)}
    </button>
  );
};

export default FilterButton;
