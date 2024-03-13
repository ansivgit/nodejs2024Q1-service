import { Injectable, UnprocessableEntityException } from '@nestjs/common';

import { DataBase } from 'src/db/db';
import { Album } from 'src/album/entities/album.entity';
import { AlbumService } from 'src/album/album.service';
import { Artist } from 'src/artist/entities/artist.entity';
import { ArtistService } from 'src/artist/artist.service';
import { Track } from 'src/track/entities/track.entity';
import { TrackService } from 'src/track/track.service';

import { Fav } from './entities/fav.entity';

@Injectable()
export class FavsService {
  constructor(
    private readonly db: DataBase,
    private readonly artistService: ArtistService,
    private readonly albumService: AlbumService,
    private readonly trackService: TrackService,
  ) {}

  findAll(): Fav {
    const albums: Album[] = this.db.favs.albums.map((albumId) =>
      this.albumService.findOne(albumId),
    );

    const artists: Artist[] = this.db.favs.artists.map((artistId) =>
      this.artistService.findOne(artistId),
    );

    const tracks: Track[] = this.db.favs.tracks.map((trackId) =>
      this.trackService.findOne(trackId),
    );

    const res: Fav = {
      artists: artists,
      albums: albums,
      tracks: tracks,
    };
    return res;
  }

  createAlbum(id: string): Album {
    const album: Album | undefined = this.db.albums.find(
      (entity) => entity.id === id,
    );

    if (!album) {
      throw new UnprocessableEntityException("Item doesn't exist");
    }

    this.db.favs.albums.push(album.id);
    return album;
  }

  removeAlbum(id: string): void {
    const entity = this.albumService.findOne(id);

    const entityIndex = this.db.favs.albums.findIndex(
      (itemId) => itemId === entity.id,
    );

    this.db.favs.albums.splice(entityIndex, 1);
  }

  createArtist(id: string): Artist {
    const artist: Artist | undefined = this.db.artists.find(
      (entity) => entity.id === id,
    );

    if (!artist) {
      throw new UnprocessableEntityException("Item doesn't exist");
    }

    this.db.favs.artists.push(artist.id);
    return artist;
  }

  removeArtist(id: string): void {
    const entity = this.artistService.findOne(id);

    const entityIndex = this.db.favs.artists.findIndex(
      (itemId) => itemId === entity.id,
    );

    this.db.favs.artists.splice(entityIndex, 1);
  }

  createTrack(id: string): Track {
    const track: Track | undefined = this.db.tracks.find(
      (entity) => entity.id === id,
    );

    if (!track) {
      throw new UnprocessableEntityException("Item doesn't exist");
    }

    this.db.favs.tracks.push(track.id);
    return track;
  }

  removeTrack(id: string): void {
    const entity = this.trackService.findOne(id);

    const entityIndex = this.db.favs.tracks.findIndex(
      (itemId) => itemId === entity.id,
    );

    this.db.favs.tracks.splice(entityIndex, 1);
  }
}
