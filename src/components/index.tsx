import { ScrollObserver } from "../utils/scroll-observer";
import Projects from "./projects";

// All new components will come here and spread in the application
export const Home = () => {
  return (
    <section className="mx-auto max-w-md p-4 border border-neutral-100 my-16 shadow-2xl overflow-scroll scroll-smooth h-full bg-white">
      <h1 className="text-indigo-950 text-7xl font-bold font-[Melodrama]">
        This is the home page
      </h1>
      <Projects />

      <h2 className="font-[Bonny] text-center">
        All the components can be added in here and exported from here
      </h2>
      <p className="text-neutral-900">
        Hi! I'm Nick, and I love to code. About five years ago I decided that I
        wanted to learn to code, but I had limited access to programming
        resources, and I was getting frustrated with all of the YouTube videos
        and online tutorials out there. I experimented, struggled, and
        definitely failed a lot, but I finally got the hang of it, so I decided
        that I wanted to change the way that people learned to code, and I
        started teaching. My experience as an online student has directly
        influenced my teaching style, because I know what it is like to be in
        your shoes.
      </p>
      <p className="font-[nunito]">
        When Apple announced their new programming language, Swift, in 2014, I
        made my big online teaching debut and created the internet's first Swift
        course. Since that time, I have become a full-time online instructor and
        I now have courses not only in Swift, but also in iOS, Android, Django,
        Kotlin, Python, HTML, Blockchain, etc. I have also created five iOS apps
        from scratch that are currently live in the App Store and are being used
        by thousands of users worldwide.
      </p>
      <div>
        <h1 className="text-5xl font-[Melodrama]">More</h1>
        <p className=" font-[nunito]">
          I love sharing my excitement for coding with my students, and I try to
          make learning as fun and as easy as possible. Thanks for being part of
          my coding community!
        </p>
      </div>
    </section>
  );
};
