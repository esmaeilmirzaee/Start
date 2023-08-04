import React, { useCallback, useEffect, useState } from "react";

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
});

export const ScrollObserver: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [scrollY, scrollYSet] = React.useState(0);
  
  const handleScrollY = React.useCallback(() => {
    scrollYSet(window.scrollY);
  }, []);

  React.useEffect(() => {
    document.addEventListener("scroll", handleScrollY, { passive: true });

    return () => document.removeEventListener("scroll", handleScrollY);
  }, [handleScrollY]);

  console.log({ scrollY });

  return (
    <ScrollContext.Provider value={{ scrollY }}>
      {children}
    </ScrollContext.Provider>
  );
};
