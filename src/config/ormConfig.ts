import { DataSourceOptions } from 'typeorm';

export const ormConfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  synchronize: false,
  entities: [
    // UserEntity,
    // ArtistEntity,
    // AlbumEntity,
    // TrackEntity,
    // FavArtistEntity,
    // FavAlbumEntity,
    // FavTrackEntity,
  ],
  // migrationsRun: true,
  // migrations: ['dist/database/migrations/*.js'],
};
