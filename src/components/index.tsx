import { useContext } from 'react';
import { Context } from '../utils/contexts';

// All new components will come here and spread in the application
export function Blog() {
  const value = useContext(Context);

  return (
    <div>
      <h1>Now I'm using context</h1>
      <h6>{value}</h6>
    </div>
  );
}
