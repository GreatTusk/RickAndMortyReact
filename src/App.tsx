import { ThemeProvider } from "./components/ThemeProvider";
import { RickAndMortyCharacterDatasource } from "./feature/character/data/datasource/RickAndMortyCharacterDatasource";
import { CharacterScreen } from "./feature/character/ui/CharacterScreen";

function App() {
  const characterDatasource = new RickAndMortyCharacterDatasource();
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <main>
        <CharacterScreen characterDatasource={characterDatasource} />
      </main>
    </ThemeProvider>
  );
}

export default App;
