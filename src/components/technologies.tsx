import ClientLogos from "../utilities/client-logos";

const logos = [
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

const Technologies: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-16 md:gap-32">
      <div className="flex flex-col justify-center items-center">
        <span className="text-3xl font-bold whitespace-nowrap">
          Technologies
        </span>{" "}
        <span className="text-md whitespace-nowrap">
          Technologies we use daily
        </span>
        <ClientLogos className="mt-10" logos={logos} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <div className="text-3xl tracking-tight text-center ">
            We believe in good communication in software development process.
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </section>
  );
};

export default Technologies;
