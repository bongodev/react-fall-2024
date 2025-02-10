export default function Input({
  label,
  name,
  value,
  placeholder,
  type = 'text',
  ...props
}) {
  return (
    <div className="w-full">
      {label && <label htmlFor={`id-{name}`}>{label}</label>}
      <input
        className="w-full focus:outline-none border-2 border-gray-800 bg-zinc-600 text-slate-300 px-4 py-2 rounded-md focus:border-2 focus:border-blue-500"
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        {...props}
      />
    </div>
  );
}
