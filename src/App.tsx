import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <div></div>
      <h1>Vite + React</h1>
      <div className="bg-black">
        <button
          className="bg-indigo-600 text-white"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
