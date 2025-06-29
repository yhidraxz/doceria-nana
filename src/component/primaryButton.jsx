export function PrimaryButton({ className, text, onClick }) {
  return (
    <button
      className={`${className} btn  transform transition-all duration-100 hover:opacity-80 hover:scale-95 ease-in`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
