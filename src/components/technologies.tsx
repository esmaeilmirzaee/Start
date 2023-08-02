import ClientLogos from "../utilities/client-logos";

const Technologies: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center gap-16 md:gap-32">
      <div className="flex flex-col justify-center items-center">
        <div className="flex-1"></div>
        <span className="text-3xl font-bold whitespace-nowrap">
          Trusteb by
        </span>{" "}
        <span className="text-md whitespace-nowrap">
          Some of the apps you might use daily
        </span>
        <ClientLogos className="my-10" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="container mx-auto lg:max-w-[70%] lg:px-10">
          <div className="text-3xl tracking-tight text-center !leading-[3.5rem]">
            We believe in good communication in software development process.
          </div>
        </div>
      </div>
      <div className="flex-1"></div>
    </section>
  );
};

export default Technologies;
