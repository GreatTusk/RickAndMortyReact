import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import type { Character } from "../domain/Character";
import type { CharacterDatasource } from "../domain/CharacterDatasource";
import { CharacterGrid } from "./components/CharacterCardGrid";
import { Input } from "@/components/ui/input";
import { Heart, SearchIcon, User } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
} from "@/components/ui/pagination";
import { useDebounce } from "use-debounce";
import { renderPaginationItems } from "./PaginationExt";
import { FilterDropdown } from "./components/FilterDropdown";

export const CharacterScreen = ({
  characterDatasource,
}: {
  characterDatasource: CharacterDatasource;
}) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [statusFilter, setStatusFilter] = useState<
    "Alive" | "Dead" | "unknown" | "All"
  >("All");
  const [speciesFilter, setSpeciesFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery] = useDebounce(searchQuery, 300);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const fetchedCharacters = await characterDatasource.fetchCharacters(
        debouncedQuery,
        speciesFilter,
        statusFilter,
        page
      );
      setCharacters(fetchedCharacters.characters);
      setTotalPages(fetchedCharacters.pages);
      setLoading(false);
    }
    fetch();
  }, [characterDatasource, debouncedQuery, speciesFilter, statusFilter, page]);

  const uniqueSpecies = ["All", ...new Set(characters.map((c) => c.species))];

  const handlePageChange = (newPage: number) => {
    setSearchParams({ page: newPage.toString() });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setSearchParams({ page: "1" });
  };

  const handleStatusFilterChange = (
    value: "Alive" | "Dead" | "unknown" | "All"
  ) => {
    setStatusFilter(value);
    setSearchParams({ page: "1" });
  };

  const handleSpeciesFilterChange = (value: string) => {
    setSpeciesFilter(value);
    setSearchParams({ page: "1" });
  };

  return (
    <section className="flex flex-col items-center bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <img
        src="Rick_and_Morty.svg"
        alt="Rick and Morty Logo"
        className="h-32 my-12"
      />

      <div className="flex w-full max-w-sm items-center space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Enter a character..."
          value={searchQuery}
          left={<SearchIcon className="text-gray-500 dark:text-gray-400" />}
          onChange={handleSearchChange}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
        />
      </div>

      <div className="flex w-full max-w-sm items-center space-x-2 mb-8">
        <FilterDropdown
          label="Status"
          icon={<Heart className="ml-2 h-4 w-4" />}
          value={statusFilter}
          options={["All", "Alive", "Dead", "unknown"]}
          onChange={(status) =>
            handleStatusFilterChange(
              status as "Alive" | "Dead" | "unknown" | "All"
            )
          }
        />
        <FilterDropdown
          label="Species"
          icon={<User className="ml-2 h-4 w-4" />}
          value={speciesFilter}
          options={uniqueSpecies}
          onChange={handleSpeciesFilterChange}
        />
      </div>

      <section className="flex justify-center items-center">
        <CharacterGrid characters={characters} isLoading={loading} />
      </section>

      <Pagination className="my-8">
        <PaginationContent>
          <PaginationItem>
            {page > 1 && (
              <PaginationPrevious
                onClick={() => handlePageChange(page - 1)}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800" 
              />
            )}
          </PaginationItem>
          {renderPaginationItems(page, totalPages, handlePageChange)}
          <PaginationItem>
            {page < totalPages && (
              <PaginationNext
                onClick={() => handlePageChange(page + 1)}
                className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:bg-gray-800"
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </section>
  );
};
