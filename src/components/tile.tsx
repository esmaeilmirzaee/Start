import React from 'react';

interface WrapperProps {
  numOfPages: number;
  children: React.ReactNode;
}

interface TileContextValue {
  numOfPages: number;
  currentPage: number;
}

export const TileContext = React.createContext<TileContextValue>({
  numOfPages: 0,
  currentPage: 0,
});

export const TileWrapper: React.FC<WrapperProps> = ({
  numOfPages,
  children,
}) => {
  return (
    <div>
      {children}
      </div>
  )
};