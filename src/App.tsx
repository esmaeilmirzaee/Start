import { useState } from 'react';
import { Home } from './components';
import SizeObserver from './utilities/size-observer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <SizeObserver>
      <div className="flex justify-center items-center w-screen h-screen bg-wall bg-cover">
        <Home />
      </div>
    </SizeObserver>
  );
}

export default App;
