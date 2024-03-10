import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
} from 'class-validator';

export class Album {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsOptional()
  year?: number;

  @IsString()
  @IsUUID()
  @IsOptional()
  artistId?: string;

  constructor(album: Album) {
    Object.assign(this, album);
  }
}
