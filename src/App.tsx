import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <h1 className="text-center font-bold text-6xl">Start</h1>
    </div>
  );
}

export default App;
