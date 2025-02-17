import { useEffect, useState } from "react";
import { Character } from "../domain/Character";
import { CharacterDatasource } from "../domain/CharacterDatasource";
import { CharacterCard } from "./components/CharacterCard";

export const CharacterScreen = ({characterDatasource}: {characterDatasource : CharacterDatasource}) => {
  const [characters, setCharacters] = useState<Character[] | undefined>(
    undefined
  );

  useEffect(() => {
    async function fetch() {
      const characters = await characterDatasource.fetchCharacters();
      setCharacters(characters);
    }
    fetch();
  }, [characterDatasource]);

  if (characters == undefined) return null;

  return (
    <ul>
      {characters.map((character) => (
        <li key={character.name}>
          <CharacterCard character={character} />
        </li>
      ))}
    </ul>
  );
};
