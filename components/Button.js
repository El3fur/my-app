export default function Button({ text, onClick, bgColor, textColor, className }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-bold rounded ${bgColor ? `bg-${bgColor}` : 'bg-blue-500'} ${textColor ? `text-${textColor}` : 'text-white'} w-auto ${className}`}
    >
      {text}
    </button>
  );
}
