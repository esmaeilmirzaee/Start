import { ScrollObserver } from "../utils/scroll-observer";
import { TileContent, TileWrapper, TileBackground, Tile } from "./tile";

export default function Projects() {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground></TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <span className="text-9xl">Foo {progress}</span>
          )}
        ></Tile>
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <span className="text-9xl">Bar {progress}</span>
          )}
        ></Tile>
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <span className="text-9xl">Bar {progress}</span>
          )}
        ></Tile>
      </TileContent>
    </TileWrapper>
  );
}
