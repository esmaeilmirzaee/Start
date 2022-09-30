import { useState } from 'react';
import OnlyHome from './components/index';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="">
      <OnlyHome />
    </div>
  );
}

export default App;
