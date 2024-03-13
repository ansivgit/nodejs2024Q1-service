export const testData = {
  artist: {
    id: 'e150017f-5164-4c97-a88d-a823787f67d2',
    name: 'AnnaZas',
    grammy: true,
  },
  user: {
    id: 'e150017f-5164-4c97-a88d-a823787f67d2',
    login: 'admin',
    password: '11111',
    version: 1,
    createdAt: 1655000000,
    updatedAt: 1655000000,
  },
  album: {
    id: 'b45b710b-1feb-472c-bab5-d335df887cad',
    name: 'Best Album',
    year: 2022,
    artistId: 'e150017f-5164-4c97-a88d-a823787f67d2',
  },
  track: {
    id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    name: 'The Show Must Go On',
    artistId: 'e150017f-5164-4c97-a88d-a823787f67d2',
    albumId: 'b45b710b-1feb-472c-bab5-d335df887cad',
    duration: 262,
  },
  favs: {
    artists: ['e150017f-5164-4c97-a88d-a823787f67d2'],
    albums: ['b45b710b-1feb-472c-bab5-d335df887cad'],
    tracks: ['3fa85f64-5717-4562-b3fc-2c963f66afa6'],
  },
};
