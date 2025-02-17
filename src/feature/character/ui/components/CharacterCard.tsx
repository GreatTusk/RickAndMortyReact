import { Character } from "../../domain/Character";

export const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <div>
      <h3>{character.name}</h3>
      <h4>{character.species}</h4>
      <h2>{character.state}</h2>
    </div>
  );
};
