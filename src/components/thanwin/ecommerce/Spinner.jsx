const Spinner = ({ size = 'w-12 h-12', color = 'text-white' }) => {
  return (
    <div className={`flex justify-center items-center`}>
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${size} ${color} border-gray-300`}
      ></div>
    </div>
  );
};

export default Spinner;
