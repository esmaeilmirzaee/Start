import { Home } from "./components";
import { ScrollObserver } from "./utils/scroll-observer";

function App() {
  return (
    <ScrollObserver>
      <div className="flex justify-center items-center w-screen h-screen bg-wall bg-cover">
        <Home />
      </div>
    </ScrollObserver>
  );
}

export default App;
