import { useEcommerceContext } from './ecommerContext';
import FilterButton from './FilterButton';

const FilterContainer = () => {
  const { handleClear, categories } = useEcommerceContext();
  return (
    <div className="flex gap-3 justify-center mb-4">
      <button
        onClick={handleClear}
        className="bg-gray-300  text-slate-800 hover:bg-gray-700 hover:text-slate-100 cursor-pointer px-4 py-2 rounded-md"
      >
        Clear
      </button>
      {categories.map((category) => (
        <FilterButton key={category} categoryName={category} />
      ))}
    </div>
  );
};

export default FilterContainer;
