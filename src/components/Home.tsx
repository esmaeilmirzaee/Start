import { useRef } from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';

export default function Home() {
  let ref = useRef(null);
  let { scrollYProgress } = useScroll({
    target: ref,
  });
  let y = useTransform(scrollYProgress, [0, 300], [`0%`, `50%`]);

  return (
    <section className="w-escape relative -mt-[76px] flex flex-col pt-[76px] relative">
      <motion.div
        style={{ y }}
        ref={ref}
        className="absolute inset-x-0 top-0 -z-20 mx-auto max-w-[1800px]"
      >
        <div>
          <video
            muted
            playsInline
            loop
            autoPlay
            className="w-full h-full object-cover object-center"
          >
            <source
              // src="https://assets.mixkit.co/videos/preview/mixkit-sailing-down-a-river-surrounded-by-trees-43600-large.mp4"
              src="https://assets.mixkit.co/videos/preview/mixkit-open-office-space-914-large.mp4"
              type="video/mp4"
            />
          </video>

          <div
            className="absolute -inset-px md:hidden"
            style={{
              background: `linear-gradient(#eee / .3 50%, #333 / .3 50%) `,
            }}
          ></div>
        </div>
      </motion.div>

      <div className="border-y border-white/10 py-2 lg:my-32">
        <div className="mx-auto max-w-7xl">
          <div className="lg:grid lg:grid-cols-3 lg:gap-3.5">
            <h1 className="leading px-2 text-3xl font-extrabold tracking-tight md:text-5xl text-white">
              This is a piece of text <br /> So <br />
              learn how to
            </h1>
          </div>
        </div>
      </div>
      <div className="grid gap-3 grid-cols-4 mx-2">
        {[
          {
            link: 'https://images.unsplash.com/photo-1663258626183-4250bc9e95e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            alt: 'Lukas Blaskevicius',
          },
          {
            link: 'https://images.unsplash.com/photo-1664541404591-3ca2124560e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80',
            alt: 'Michele Tardivo',
          },
          {
            link: 'https://images.unsplash.com/photo-1664513291148-4ff5b1d58566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            alt: 'Taylor Heery',
          },
          {
            link: 'https://images.unsplash.com/photo-1664475899185-81872d8f5d59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            alt: 'Andrei R. Popescu',
          },
        ].map((item) => (
          <div className="grid col-span-1 text-white w-full overflow-hidden relative rounded shadow h-[200px]">
            <img
              src={item.link}
              alt={item.alt}
              className="object-center object-cover"
            />
            <h1 className="absolute top-2 font-bold text-2xl text-center mx-center">
              {item.alt}
            </h1>
          </div>
        ))}
      </div>

      {/* TODO */}
      <div className="mt-10 text-white">
        <div className="">
          <h1 className="font-extrabold text-3xl md:text-5xl">
            Learn Frame Motion
          </h1>
        </div>
      </div>
      <section className="ml-[calc(50%-50vw)] w-screen border-b border-white/10 bg-gray-50 ">
        <Post />
      </section>
    </section>
  );
}

function Post() {
  let { scrollYProgress } = useScroll();
  let width = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <div className="mx-auto max-w-sm relative">
      <motion.div
        style={{ width }}
        className="bg-indigo-600 h-10 left-10"
      ></motion.div>
      {[
        {
          text: "Today we're going to walk you through everything you need to know about ER Diagramming. By reading this ERD guide, you will get the essential knowledge and skills about ER Diagrams and database design. You will learn things like what is ERD, why ERD, ERD notations, how to draw ERD, etc. along with a bunch of ERD examples.",
        },
        {
          text: 'Database is absolutely an integral part of software systems. To fully utilize ER Diagram in database engineering guarantees you to produce high-quality database design to use in database creation, management, and maintenance. An ER model also provides a means for communication.',
        },
        {
          text: 'First of all, what is an Entity Relationship Diagram?',
        },
        {
          text: 'Entity Relationship Diagram, also known as ERD, ER Diagram or ER model, is a type of structural diagram for use in database design. An ERD contains different symbols and connectors that visualize two important information: The major entities within the system scope, and the inter-relationships among these entities.',
        },
        {
          text: `And that's why it's called "Entity" "Relationship" diagram (ERD)!`,
        },
        {
          text: `When we talk about entities in ERD, very often we are referring to business objects such as people/roles (e.g. Student), tangible business objects (e.g. Product), intangible business objects (e.g. Log), etc. "Relationship" is about how these entities relate to each other within the system.`,
        },
      ].map((item) => (
        <Section key={item.text} paragraph={item.text} />
      ))}
    </div>
  );
}

function Section({ paragraph }: { paragraph: string }) {
  return (
    <section className="space-y-4 py-4">
      <p>{paragraph}</p>
    </section>
  );
}
