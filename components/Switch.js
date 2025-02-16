export default function Switch({ text, onChange, bgColor = 'bg-gray-300', textColor = 'text-black' }) {
  return (
    <div className={`flex items-center ${textColor}`}>
      <span className="mr-2">{text}</span>
      <label className="relative inline-block w-12 h-6">
        <input
          type="checkbox"
          onChange={(e) => onChange(e.target.checked)}
          className="opacity-0 w-0 h-0 peer"
        />
        
        <span
          className={`absolute inset-0 rounded-full transition-all bg-gray-300 peer-checked:bg-violet-600`}
        ></span>
        <span
          className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-all peer-checked:translate-x-6"
        ></span>
      </label>
    </div>
  );
}

