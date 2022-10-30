// navbar
export function Navbar() {
  return (
    <div className="flex flex-row justify-between items-center w-auto">
      {/* left */}
      <div className="flex">
        <a className="p-2 cursor-pointer" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </a>

        <a className="p-2 cursor-pointer" href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </a>
      </div>
      {/* right */}

      <div>
        <a className="p-2 cursor-pointer" href="#">
          Sign in
        </a>
      </div>
    </div>
  );
}
// tags
const categories = [
  'business',
  'start up',
  'stock',
  'technology',
  'entertainment',
];
export function CategoryNavbar() {
  return (
    <div className="mx-auto flex justify-evenly flex-row border-y border-zinc-200 p-2 mb-2">
      {categories.map((c) => (
        <span
          key={c}
          className="px-4 mx-auto cursor-pointer hover:bg-zinc-50 p-2"
        >
          {c.split('')[0].toUpperCase()}
          {c.slice(1)}
        </span>
      ))}
    </div>
  );
}
// posts
const authors = [
  {
    name: 'Jane DOE',
    category: 'business',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    name: 'John DOE',
    category: 'health',
    avatar:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBvcnRyYWl0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
];
const posts = [
  {
    date: 'Aug. 22, 2022',
    title: 'That Will Never Work',
    description:
      'How many times have you been told “that will never work”? Probably not as often as Netflix co-founder Marc Randolph. The veteran Silicon Valley entrepreneur provides a healthy dose of humor, and actionable advice that will benefit founders - and would-be founders - at every stage of their business journey.',
    author: authors[0],
    thumbnail:
      'https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fHBvcnRyYWl0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    date: 'Sep. 12, 2021',
    title:
      "This Doctor Believes Every Physician Deserves a Coach: Here's What She Did About it",
    description:
      "Dr. Sunny Smith is a family physician and the founder of a coaching platform called Empowering Women Physicians. She sat down with Jessica Abo to share how she's helping doctors focus on what's most meaningful to them.",
    author: authors[1],
    thumbnail:
      'https://images.unsplash.com/photo-1566133064924-31078a7b5ef3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBvcnRyYWl0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    is_featured: true,
  },
  {
    date: 'Nov. 2, 2022',
    title:
      "This Founder Quit His 'Prison'-Like Teaching Job Within 2 Months. Now, He and His Sister Are Helping Other Teachers Leave the Classroom and Achieve Financial Freedom.",
    description:
      'Siblings Israel and Sunem Tovar co-founded The Dream Teacher Project to help teachers of color build the wealth and lives they deserve.',
    author: authors[1],
    thumbnail:
      'https://images.unsplash.com/photo-1493305457700-d3d24daf8c8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHBvcnRyYWl0JTIwYmFja2dyb3VuZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    date: 'Jan. 2, 2020',
    title: 'How Physical Disability Helped Me Become a VC-Backed Tech Founder',
    description:
      'My physical disability forced me to be resilient and have empathy for others from a very young age. These qualities have enabled me to propel myself in life and succeed.',
    author: authors[1],
    thumbnail:
      'https://images.unsplash.com/photo-1666984132216-d97e0b6d6eb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyMHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
  {
    date: 'Feb. 5, 2019',
    title: 'Electric Cars Keep Bursting Into Flames In Florida',
    description:
      "After Hurricane Ian, an unexpected inferno of EVs. What's going on?",
    author: authors[0],
    thumbnail:
      'https://images.unsplash.com/photo-1666845270404-40def71fb33b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
  },
];

export function Author({ author }) {
  return (
    <div className="flex items-center justify-evenly">
      <img src={author.avatar} className="w-8 h-8 rounded-full" />
      <div className="flex flex-col justify-start p-2">
        <span className="block font-bold text-xs">{author.name}</span>
        {/* <div className="bg-zinc-700 rounded-full w-2 h-2 mx-2"></div> */}
        <span className="block text-xs">{author.category.toUpperCase()}</span>
      </div>
    </div>
  );
}

function PostOne({ p, column }) {
  return (
    <div className="grid col-span-1 min-h-[500px]">
      <img
        src={p.thumbnail}
        className="min-h-32 max-h-40 object-cover w-full rounded-lg"
      />
      <div className="flex-1">
        <div className="flex flex-row justify-between items-center">
          <div className="mt-2 mb-1 text-xs text-zinc-500">{p.date}</div>
          <Author author={p.author} />
        </div>
        <h1 className="text-2xl font-bold -leading-9">{p.title}</h1>
        <p>{p.description}</p>
      </div>
    </div>
  );
}

function PostTwo({ p }) {
  return (
    <div className="w-auto flex flex-row m-1 col-span-3">
      <img
        src={p.thumbnail}
        className="min-h-32 max-h-80 h-auto object-cover rounded-lg w-1/2"
      />
      <div className="w-1/2 p-2">
        <h1 className="text-2xl font-bold tracking-tight">{p.title}</h1>
        <div className="flex flex-row justify-between py-2">
          <div className="mt-2 mb-1 text-xs text-zinc-500">{p.date}</div>
          <Author author={p.author} />
        </div>
        <div className="flex-1">
          <p className="py-2">{p.description}</p>
        </div>
      </div>
    </div>
  );
}

export function Post() {
  return (
    <div className="grid grid-cols-3 gap-4 mx-4">
      {posts.map((p) =>
        p.is_featured ? (
          <PostTwo key={p.title} p={p} />
        ) : (
          <PostOne key={p.title} p={p} column={p.is_featured} />
        )
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="w-screen h-auto text-zinc-800">
      <Navbar />
      <CategoryNavbar />
      <Post />
    </div>
  );
}
