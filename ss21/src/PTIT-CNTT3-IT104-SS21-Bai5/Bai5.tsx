export default function App() {
  return (
    <div className="relative w-80 h-40 bg-sky-200 p-4 rounded-lg">
      <p className="text-sky-800 font-medium">Relative parent</p>
      <div className="absolute bottom-0 left-0 bg-sky-500 text-white px-4 py-2 rounded-lg font-semibold">
        Absolute child
      </div>
    </div>
  );
}
