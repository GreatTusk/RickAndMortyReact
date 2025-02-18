export type Character = {
    id: number,
    name: string,
    species: string,
    state: 'Alive' | 'Dead' | 'unknown',
    imgUrl: string
};