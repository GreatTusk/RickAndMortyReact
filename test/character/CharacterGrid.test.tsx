import { Character } from "@/feature/character/domain/Character";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom/vitest";
import { CharacterGrid } from "@/feature/character/ui/components/CharacterCardGrid";

describe("CharacterGrid", () => {
  it("renders loading skeletons when isLoading is true", () => {
    render(<CharacterGrid characters={[]} isLoading={true} />);
    
    const skeletons = document.querySelectorAll('[data-testid="character-skeleton"]');
    expect(skeletons.length).toBe(20);
  });

  it("renders 'No Results' when characters array is empty and not loading", () => {
    render(<CharacterGrid characters={[]} isLoading={false} />);
    
    expect(screen.getByTestId("no-results")).toBeInTheDocument();
  });

  it("renders character cards when characters are provided", () => {
    const mockCharacters: Character[] = [
      {
        id: 1,
        name: "Rick Sanchez",
        species: "Human",
        state: "Alive",
        imgUrl: ""
      },
      {
        id: 2,
        name: "Morty Smith",
        species: "Human",
        state: "Alive",
        imgUrl: ""
      }
    ];

    render(<CharacterGrid characters={mockCharacters} isLoading={false} />);
    
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Morty Smith")).toBeInTheDocument();
  });

  it("applies correct grid layout classes", () => {
    render(<CharacterGrid characters={[]} isLoading={false} />);
    
    const gridContainer = screen.getByTestId("character-grid");
    expect(gridContainer).toHaveClass(
      "grid",
      "grid-cols-1",
      "sm:grid-cols-2",
      "md:grid-cols-3",
      "lg:grid-cols-4",
      "gap-4"
    );
  });
});