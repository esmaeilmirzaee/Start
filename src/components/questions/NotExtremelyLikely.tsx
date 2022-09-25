// <h1>Not or Extremely Likely</h1>
function NotExtremelyLikely() {
  return (
    <div className="w-3/4 max-w-[500px] rounded border shadow p-4 overflow-hidden mx-auto shadow-lg">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between w-full">
          <h1 className="font-bold text-lg">Please help us improve!</h1>
          <span className="cursor-pointer">x</span>
        </div>
        <div className="flex flex-col w-full">
          <p className="my-2">
            How likely are you to recommend Lucidchart to a friend or
            colleagues?
          </p>
          <div className="p-1 w-full justify-between flex text-white">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((idx, v) => (
              <span
                key={idx}
                className={`${
                  idx === 0 ? null : 'ml-2'
                } " py-1 w-[40px] text-center bg-gray-300 rounded cursor-pointer hover:bg-indigo-200"`}
              >
                {v}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-row justify-between text-xs mt-2">
          <span className="">Not Likely</span>
          <span className="">Extremely Likely</span>
        </div>
      </div>
    </div>
  );
}

export default NotExtremelyLikely;
