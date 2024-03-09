import { Module } from '@nestjs/common';
import { ArtistModule } from './artist/artist.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ArtistModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
