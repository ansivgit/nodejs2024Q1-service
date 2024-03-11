import { Module } from '@nestjs/common';
import { ArtistModule } from './artist/artist.module';
import { UserModule } from './user/user.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { FavsModule } from './favs/favs.module';

@Module({
  imports: [ArtistModule, UserModule, AlbumModule, TrackModule, FavsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
