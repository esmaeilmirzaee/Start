import react, { useCallback, useContext, useRef, useState } from "react";
import { SizeContext } from "./size-observer";
import useAnimationFrame from "./use-animation-frame";

interface SliderProps {
  children: React.ReactNode;
  initialOffsetX: number;
  className: string;
  contentWidth: number;
}

const SliderContainer: React.FC<SliderProps> = ({
  children,
  initialOffsetX,
  className,
  contentWidth,
}) => {
  const { innerWidth } = useContext(SizeContext);
  const refScrollX = useRef<number>(initialOffsetX);
  const refContainer = useRef<HTMLDivElement>(null);
  const refContent = useRef<HTMLDivElement>(null);

  const enabled = innerWidth < contentWidth + 1;

  useAnimationFrame(
    enabled,
    useCallback(() => {
      const { current: elContainer } = refContainer;
      const { current: elContent } = refContent;

      if (elContainer && elContent) {
        refScrollX.current += 1;
        elContainer.scrollLeft = refScrollX.current;
        console.log(
          elContainer.scrollLeft,
          elContent.clientWidth,
          elContainer.clientWidth,
          refScrollX.current
        );
        if (
          elContainer.scrollLeft >=
            elContent.clientWidth - elContainer.clientWidth ||
          refScrollX.current > elContent.clientWidth
        ) {
          refScrollX.current = 0;
          elContainer.scrollLeft = 0;
        }
      }
    }, [])
  );

  return (
    <div
      ref={refContainer}
      className={`slider-container overflow-x-hidden max-w-full pointer-events-none whitespace-nowrap ${className}`}
    >
      <div ref={refContent} className="inline-block">
        {children}
      </div>
      {/* I don't understand the following line>> */}
      <div className={enabled ? "inline-block" : "hidden"}>{children}</div>
    </div>
  );
};

interface SliderItemProps {
  children: React.ReactNode;
  width: number;
}

export const SliderItem: React.FC<SliderItemProps> = ({ children, width }) => {
  return (
    <div
      className="inline-flex justify-center items-center mx-4"
      style={{ width }}
    >
      {children}
    </div>
  );
};

export default SliderContainer;
