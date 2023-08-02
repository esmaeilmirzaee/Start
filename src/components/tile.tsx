import React, { useContext, useRef } from "react";
import { ScrollContext } from "../utils/scroll-observer";

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
  children,
  numOfPages,
}) => {
  const { scrollY } = useContext(ScrollContext);
  console.log({ scrollY });

  let currentPage = 0;
  const refContainer = useRef<HTMLDivElement>(null);
  const { current: elContainer } = refContainer;
  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const percentY =
      Math.min(
        clientHeight + screenH / 2,
        Math.max(-screenH, scrollY - offsetTop) + screenH / 2
      ) / clientHeight;
    currentPage = percentY * numOfPages;
    console.log(currentPage);
  }

  return (
    <TileContext.Provider value={{ numOfPages, currentPage }}>
      <div className="relative bg-black text-white">
        <h1>Tile Wrapper</h1>
        {children}
      </div>
    </TileContext.Provider>
  );
};

export const TileBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="absolute h-full w-full">{children}</div>;

export const TileContent: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <div className="sticky top-0 h-screen overflow-hidden">{children}</div>;

interface TileProps {
  page: number;
  renderContent: (props: { progress: number }) => any;
}

export const Tile: React.FC<TileProps> = ({ page, renderContent }) => {
  const { currentPage, numOfPages } = useContext(TileContext);
  const refContainer = useRef<HTMLDivElement>(null);
  const progress = Math.max(0, currentPage - page);
  let opacity = Math.min(1, Math.max(0, progress * 4));
  if (progress > 0.85 && page < numOfPages - 1) {
    opacity = Math.max(0, (1.0 - progress) * 4);
  }

  console.log({ currentPage, numOfPages, progress, opacity, page });

  return (
    <div
      ref={refContainer}
      className="absolute top-0 w-full"
      style={{
        pointerEvents: progress >= 0 || progress >= 1 ? "none" : undefined,
        opacity,
      }}
    >
      {renderContent({ progress })}
    </div>
  );
};
