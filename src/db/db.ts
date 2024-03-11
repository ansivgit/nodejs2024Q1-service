import { Injectable } from '@nestjs/common';
import { Artist } from 'src/artist/entities/artist.entity';
import { User } from 'src/user/entities/user.entity';
import { Album } from 'src/album/entities/album.entity';
import { Track } from 'src/track/entities/track.entity';
import { testData } from './testData';

@Injectable()
export class DataBase {
  public artists: Artist[] = [testData.artist];
  public users: User[] = [testData.user];
  public albums: Album[] = [testData.album];
  public tracks: Track[] = [testData.track];
  public favs: Record<string, string[]> = testData.favs;
}
