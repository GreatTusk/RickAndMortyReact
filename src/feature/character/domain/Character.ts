export type Character = {
    name: string,
    species: string,
    state: 'Alive' | 'Dead' | 'unknown',
    imgUrl: string
};