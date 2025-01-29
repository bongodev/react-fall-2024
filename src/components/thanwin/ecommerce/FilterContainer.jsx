import { useEcommerceContext } from './Ecommerce';
import FilterButton from './FilterButton';

const FilterContainer = ({ categories }) => {
  const { handleClear } = useEcommerceContext();
  return (
    <div className="flex gap-3 justify-center mb-4">
      <button
        onClick={handleClear}
        className="bg-slate-700  text-slate-100 hover:bg-slate-800 cursor-pointer px-4 py-2 rounded-md"
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
