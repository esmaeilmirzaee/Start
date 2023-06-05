import { useState } from 'react';
import { Context } from './utils/contexts';
import { Blog } from './components/index';

function App() {
  const [count, setCount] = useState(0);
  const value = 5;

  return (
    <Context.Provider value={value}>
      <div className="flex justify-center items-center w-screen h-screen">
        <h1 className="text-center font-bold text-6xl">Start</h1>
        <div className="text-indigo-800">
          <Blog />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
