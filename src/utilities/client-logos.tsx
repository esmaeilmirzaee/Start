import React from "react";

import SliderContainer, { SliderItem } from "./slider";

export interface LogoType {
  src: string;
  label: string;
}

const ClientLogos: React.FC<{ className?: string; logos: LogoType[] }> = ({
  className,
  logos,
}) => (
  <SliderContainer
    className={`my-2 ${className}`}
    initialOffsetX={0}
    contentWidth={window.innerWidth}
  >
    {logos.map((item: LogoType, idx: number) => (
      <SliderItem key={idx} width={150}>
        <img
          src={item.src}
          height={50}
          width={150}
          alt={item.label}
          className="object-contain"
        />
      </SliderItem>
    ))}
  </SliderContainer>
);

export default ClientLogos;
