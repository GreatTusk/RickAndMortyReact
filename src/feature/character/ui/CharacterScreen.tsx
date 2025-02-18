import { useEffect, useState } from "react";
import type { Character } from "../domain/Character";
import type { CharacterDatasource } from "../domain/CharacterDatasource";
import { CharacterGrid } from "./components/CharacterCardGrid";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { useDebounce } from "use-debounce";
import { renderPaginationItems } from "./PaginationExt";

export const CharacterScreen = ({
  characterDatasource,
}: {
  characterDatasource: CharacterDatasource;
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [statusFilter, setStatusFilter] = useState<
    "Alive" | "Dead" | "unknown" | "All"
  >("All");
  const [speciesFilter, setSpeciesFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    async function fetch() {
      const fetchedCharacters = await characterDatasource.fetchCharacters(
        debouncedQuery,
        speciesFilter,
        statusFilter,
        page
      );
      setCharacters(fetchedCharacters.characters);
      setTotalPages(fetchedCharacters.pages);
    }
    fetch();
  }, [characterDatasource, debouncedQuery, speciesFilter, statusFilter, page]);

  const uniqueSpecies = ["All", ...new Set(characters.map((c) => c.species))];

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const handleStatusFilterChange = (
    value: "Alive" | "Dead" | "unknown" | "All"
  ) => {
    setStatusFilter(value);
    setPage(1);
  };

  const handleSpeciesFilterChange = (value: string) => {
    setSpeciesFilter(value);
    setPage(1);
  };

  return (
    <section className="flex flex-col items-center">
      <img
        src="Rick_and_Morty.svg"
        alt="Rick and Morty Logo"
        className="h-32 my-16"
      />

      <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Enter a character..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2 mb-8">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="w-full">
              Status <Filter className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter by Status</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={statusFilter}
              onValueChange={(status) =>
                handleStatusFilterChange(
                  status as "Alive" | "Dead" | "unknown" | "All"
                )
              }
            >
              <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Alive">Alive</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="Dead">Dead</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="unknown">
                Unknown
              </DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" className="w-full">
              Species <Filter className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Filter by Species</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={speciesFilter}
              onValueChange={handleSpeciesFilterChange}
            >
              {uniqueSpecies.map((species) => (
                <DropdownMenuRadioItem key={species} value={species}>
                  {species}
                </DropdownMenuRadioItem>
              ))}
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <section className="flex justify-center items-center">
        <CharacterGrid characters={characters} />
      </section>

      <Pagination className="my-8">
        <PaginationContent>
          <PaginationItem>
            {page > 1 && (
              <PaginationPrevious onClick={() => handlePageChange(page - 1)} />
            )}
          </PaginationItem>
          {renderPaginationItems(page, totalPages, handlePageChange)}
          <PaginationItem>
            {page < totalPages && (
              <PaginationNext onClick={() => handlePageChange(page + 1)} />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};
