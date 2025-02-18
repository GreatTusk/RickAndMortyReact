import type { CharacterDatasource } from "../../domain/CharacterDatasource"
import type { CharactersPageInfo } from "../../domain/PaginationInfo"
import type { CharacterDtos } from "../dto/CharacterDto"
import { characterDtoToCharacter } from "../mapper/CharacterDtoMapper"

const CHARACTER_API_URL = "https://rickandmortyapi.com/api/character"

export class RickAndMortyCharacterDatasource implements CharacterDatasource {
  async fetchCharacters(
    name: string,
    species: string | undefined,
    status: "Alive" | "Dead" | "unknown" | "All",
    page: number,
  ): Promise<CharactersPageInfo> {
    try {
      const queryParams = new URLSearchParams({ name })

      if (species && species !== "All") {
        queryParams.append("species", species)
      }

      if (status !== "All") {
        queryParams.append("status", status)
      }

      queryParams.append("page", page.toString())

      const response = await fetch(`${CHARACTER_API_URL}?${queryParams.toString()}`)
      console.log(`${CHARACTER_API_URL}?${queryParams.toString()}`)
      if (!response.ok) {
        throw new Error(`Error fetching characters: ${response.statusText}`)
      }

      const characterDto: CharacterDtos = await response.json()
      return {
        characters: characterDto.results.map(characterDtoToCharacter),
        pages: characterDto.info.pages,
      }
    } catch (error) {
      console.error(error)
      return {
        characters: [],
        pages: 0,
      }
    }
  }
}

