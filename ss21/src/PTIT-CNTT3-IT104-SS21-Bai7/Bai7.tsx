export default function App() {
  return (
    <div className="grid grid-cols-3 gap-6 p-6">
      {Array.from({ length: 9 }, (_, i) => (
        <div
          key={i}
          className="bg-[rgb(217,70,239)] text-white font-bold flex items-center justify-center h-20 rounded-xl shadow-md"
        >
          0{i + 1}
        </div>
      ))}
    </div>
  );
}
