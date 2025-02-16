export default function InputField({ placeholder, bgColor, textColor, onChange }) {
  return (
      <input
          type="text"
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-500 ${bgColor ? `bg-${bgColor}` : 'bg-gray-200'} ${textColor ? `text-${textColor}` : 'text-black'}`}
      />
  );
}