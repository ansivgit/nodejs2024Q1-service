import { Module } from '@nestjs/common';
import { ArtistModule } from './artist/artist.module';
import { UserModule } from './user/user.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';

@Module({
  imports: [ArtistModule, UserModule, AlbumModule, TrackModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
