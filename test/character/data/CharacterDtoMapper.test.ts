import { CharacterDto } from "@/feature/character/data/dto/CharacterDto";
import { characterDtoToCharacter } from "@/feature/character/data/mapper/CharacterDtoMapper";
import { describe, it, expect } from "vitest";

describe("characterDtoToCharacter", () => {
  it("should map CharacterDto to Character correctly", () => {
    const characterDto: CharacterDto = {
      id: 1,
      name: "Rick Sanchez",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
      episode: [
        "https://rickandmortyapi.com/api/episode/1",
        "https://rickandmortyapi.com/api/episode/2",
      ],
      url: "https://rickandmortyapi.com/api/character/1",
      created: "2017-11-04T18:48:46.250Z",
    };

    const expectedCharacter = {
      id: 1,
      name: "Rick Sanchez",
      species: "Human",
      state: "Alive",
      imgUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };

    const result = characterDtoToCharacter(characterDto);
    expect(result).toEqual(expectedCharacter);
  });
});
