import { Character } from "../../domain/Character";
import { CharacterDatasource } from "../../domain/CharacterDatasource";
import { CharacterDtos } from "../dto/CharacterDto";
import { characterDtoToCharacter } from "../mapper/CharacterDtoMapper";

const CHARACTER_API_URL = 'https://rickandmortyapi.com/api/character'

export class RickAndMortyCharacterDatasource implements CharacterDatasource {
    async fetchCharacters(): Promise<Character[]> {
        const data = await fetch(CHARACTER_API_URL)
        const characterDto: CharacterDtos = await data.json()
        return characterDto.results.map(characterDtoToCharacter)
    }
}