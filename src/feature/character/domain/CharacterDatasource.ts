import { Character } from "./Character";

export interface CharacterDatasource {
    fetchCharacters(): Promise<Character[]>
}