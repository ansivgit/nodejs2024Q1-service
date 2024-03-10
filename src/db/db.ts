import { Injectable } from '@nestjs/common';
import { Artist } from 'src/artist/entities/artist.entity';
import { User } from 'src/user/entities/user.entity';
import { Album } from 'src/album/entities/album.entity';
import { testData } from './testData';

@Injectable()
export class DataBase {
  public artists: Artist[] = [testData.artist];
  public users: User[] = [testData.user];
  public albums: Album[] = [testData.album];
}
