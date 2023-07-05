import { useState } from 'react';
import { Home } from './components';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='flex justify-center items-center w-screen h-screen bg-wall bg-cover'>
      <Home />
    </div>
  );
}

export default App;
