import { useEcommerceContext } from './Ecommerce';

const FilterButton = ({ categoryName }) => {
  const { handleFilter, selectedCategories } = useEcommerceContext();
  return (
    <button
      onClick={() => handleFilter(categoryName)}
      className={`cursor-pointer  px-4 py-1   rounded-md ${
        selectedCategories.includes(categoryName)
          ? 'bg-slate-800 text-slate-100'
          : 'border border-blue-300 hover:bg-slate-800 hover:text-slate-100'
      } `}
    >
      {categoryName}
    </button>
  );
};

export default FilterButton;
