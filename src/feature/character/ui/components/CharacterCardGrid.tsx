import { Character } from "../../domain/Character";
import { CharacterCard } from "./CharacterCard";
import { CharacterCardSkeleton } from "./CharacterCardSkeleton";

export const CharacterGrid = ({ characters }: { characters: Character[] }) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characters.length !== 0
          ? characters.map((character) => (
              <CharacterCard key={character.name} character={character} />
            ))
          : Array.from({ length: 20 }).map((_, index) => (
              <CharacterCardSkeleton key={index} />
            ))}
      </div>
    </div>
  );
};
