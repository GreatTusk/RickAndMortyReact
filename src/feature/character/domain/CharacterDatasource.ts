import { CharactersPageInfo } from "./PaginationInfo";

export interface CharacterDatasource {
  fetchCharacters(
    name: string | undefined,
    species: string | undefined,
    status: "Alive" | "Dead" | "unknown" | "All",
    page: number
  ): Promise<CharactersPageInfo>;
}
