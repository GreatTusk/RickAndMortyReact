import { Character } from "../../domain/Character";
import { CharacterDto } from "../dto/CharacterDto";

export function characterDtoToCharacter(characterDto: CharacterDto): Character {
  return {
    id: characterDto.id,
    name: characterDto.name,
    species: characterDto.species,
    state: characterDto.status as 'Alive' | 'Dead' | 'unknown',
    imgUrl: characterDto.image
  };
}
