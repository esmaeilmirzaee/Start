import React from "react";

import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC<{ className?: string }> = ({ className }) => (
  <SliderContainer
    className={`my-2 ${className}`}
    initialOffsetX={0}
    contentWidth={window.innerWidth}
  >
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
  { src: `assets/logos/python.svg`, name: "Python" },
  { src: `assets/logos/typescript.svg`, name: "TypeScript" },
  { src: `assets/logos/node.svg`, name: "Node" },
  { src: `assets/logos/flutter.svg`, name: "Flutter" },
  { src: `assets/logos/javascript.svg`, name: "JavaScript" },
  { src: `assets/logos/django.svg`, name: "Django" },
  { src: `assets/logos/dart.svg`, name: "Dart" },
  { src: `assets/logos/fastapi.svg`, name: "FastAPI" },
  { src: `assets/logos/docker.svg`, name: "Docker" },
  { src: `assets/logos/kubernetes.svg`, name: "Kubernetes" },
  { src: `assets/logos/react.svg`, name: "React" },
  { src: `assets/logos/git.svg`, name: "Git" },
  { src: `assets/logos/mongodb.svg`, name: "MongoDB" },
  { src: `assets/logos/postgresql.svg`, name: "PostgreSQL" },
];
