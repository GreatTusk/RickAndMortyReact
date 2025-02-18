import { Character } from "@/feature/character/domain/Character";
import { CharacterCard } from "@/feature/character/ui/components/CharacterCard";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";


describe("CharacterCard", () => {
  it("renders character information correctly", () => {
    const rick: Character = {
      name: "Rick Sanchez",
      species: "Human",
      state: "Alive",
      id: 1,
      imgUrl: "",
    };
    render(<CharacterCard character={rick} />);    
    expect(screen.getByText("Rick Sanchez")).toBeInTheDocument();
    expect(screen.getByText("Human")).toBeInTheDocument();
    expect(screen.getByText("Alive")).toBeInTheDocument();
  });
});