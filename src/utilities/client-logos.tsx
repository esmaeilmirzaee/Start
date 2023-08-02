import React from 'react';

import SliderContainer, { SliderItem } from './slider';

const ClientLogos: React.FC = () => (
  <SliderContainer initialOffsetX={0} contentWidth={1290}>
    {images.map((item, idx) => (
      <SliderItem key={idx} width={150}>
        <img
          src={item.src}
          height={50}
          width={150}
          alt={item.name}
          className="object-contain"
        />
      </SliderItem>
    ))}
  </SliderContainer>
);

export default ClientLogos;

const images = [
  { src: `assets/logos/python.svg`, name: 'Python' },
  { src: `assets/logos/typescript.svg`, name: 'TypeScript' },
  { src: `assets/logos/node.svg`, name: 'Node' },
  { src: `assets/logos/flutter.svg`, name: 'Flutter' },
];
