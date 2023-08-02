import React, { useEffect, useCallback, useState } from 'react';

type ScrollValue = {
  innerWidth: number;
};

export const SizeContext = React.createContext<ScrollValue>({ innerWidth: 0 });
const SizeObserver: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [innerWidth, innerWidthSet] = useState(0);
  const handleResize = useCallback(() => {
    innerWidthSet(window.innerWidth);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    return window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <SizeContext.Provider value={{ innerWidth }}>
      {children}
    </SizeContext.Provider>
  );
};

export default SizeObserver;
