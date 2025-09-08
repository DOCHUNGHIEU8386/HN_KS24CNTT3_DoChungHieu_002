export default function App() {
  return (
    <div className="space-y-6 p-6">

      {/* Các phần tử nằm bên trái */}
      <div className="flex justify-start border rounded-lg p-2">
        <Box>01</Box>
        <Box>02</Box>
        <Box>03</Box>
      </div>

      {/* Các phần tử nằm bên phải */}
      <div className="flex justify-end border rounded-lg p-2">
        <Box>01</Box>
        <Box>02</Box>
        <Box>03</Box>
      </div>

      {/* Các phần tử nằm ở giữa */}
      <div className="flex justify-center border rounded-lg p-2">
        <Box>01</Box>
        <Box>02</Box>
        <Box>03</Box>
      </div>

      {/* Các phần tử giãn ra hai bên */}
      <div className="flex justify-between border rounded-lg p-2">
        <Box>01</Box>
        <Box>02</Box>
        <Box>03</Box>
      </div>

      {/* Các phần tử giãn đều 2 bên */}
      <div className="flex justify-around border rounded-lg p-2">
        <Box>01</Box>
        <Box>02</Box>
        <Box>03</Box>
      </div>

      {/*  Các phần tử giữa đều */}
      <div className="flex justify-evenly border rounded-lg p-2">
        <Box>01</Box>
        <Box>02</Box>
        <Box>03</Box>
      </div>

    </div>
  );
}

function Box({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-12 h-12 bg-blue-500 text-white font-bold flex items-center justify-center rounded-md mx-1">
      {children}
    </div>
  );
}
