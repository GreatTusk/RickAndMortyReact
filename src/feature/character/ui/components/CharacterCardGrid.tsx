import { Character } from "../../domain/Character";
import { CharacterCard } from "./CharacterCard";
import { CharacterCardSkeleton } from "./CharacterCardSkeleton";
import { NoResults } from "./NoResults";

export const CharacterGrid = ({
  characters,
  isLoading: loading,
}: {
  characters: Character[];
  isLoading: boolean;
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {loading ? (
          Array.from({ length: 20 }).map((_, index) => (
            <CharacterCardSkeleton key={index} />
          ))
        ) : characters.length === 0 ? (
          <div className="col-span-full flex justify-center items-center">
            <NoResults />
          </div>
        ) : (
          characters.map((character) => (
            <CharacterCard key={character.id} character={character} />
          ))
        )}
      </div>
    </div>
  );
};
