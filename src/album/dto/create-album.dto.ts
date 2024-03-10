import { ApiProperty } from '@nestjs/swagger';
import { OmitType } from '@nestjs/mapped-types';
import {
  IsInt,
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
  Min,
  Max,
} from 'class-validator';
import { Album } from '../entities/album.entity';

export class CreateAlbumDto extends OmitType(Album, ['id'] as const) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsInt()
  @Min(1900)
  @Max(2024)
  @IsOptional()
  year?: number;

  @ApiProperty()
  @IsString()
  @IsUUID()
  @IsOptional()
  artistId?: string;
}
