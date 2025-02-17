import { RickAndMortyCharacterDatasource } from "./feature/character/data/datasource/RickAndMortyCharacterDatasource";
import { CharacterScreen } from "./feature/character/ui/CharacterScreen";

function App() {
  const characterDatasource = new RickAndMortyCharacterDatasource();
  return (
    <main>
      <CharacterScreen characterDatasource={characterDatasource} />
    </main>
  );
}

export default App;
