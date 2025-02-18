# Rick and Morty Character Explorer

A React application built with Vite that allows users to explore characters from the Rick and Morty universe. The app features pagination, search functionality, and filtering options.

## Features

- Browse characters from the Rick and Morty API
- Search characters by name
- Filter characters by status (Alive, Dead, Unknown)
- Filter characters by species
- Responsive grid layout
- Loading states and error handling
- Pagination support

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4.0
- Shadcn/ui components
- Vitest

### Additional Libraries
- `use-debounce`: For search input optimization (300ms of delay per keystroke)
- `lucide-react`: For icons

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/GreatTusk/RickAndMortyReact.git
cd rick-and-morty-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test
```

## Project Structure

The project follows a layered architecture approach:

```
src/
├── feature/
│   └── character/           # Character feature module
│       ├── data/            
│       │   ├── datasource/  # Data fetching
|       |   ├── dto          # Rick and Morty API models
|       |   └── mapper       # Mapping of API models to our own
│       ├── domain/          
│       └── ui/              
│           └── components/  # React components
```

### Layer Description

- **Data Layer**: Handles all external data communication, including API calls and data transformation
- **Domain Layer**: Contains business logic, interfaces, and type definitions
- **UI Layer**: Manages the presentation logic and user interactions

## API Integration

This project uses the [Rick and Morty API](https://rickandmortyapi.com/) to fetch character data. The API provides information about characters, including:

- Name
- Status (Alive, Dead, Unknown)
- Species
- Image
- Other character details

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.