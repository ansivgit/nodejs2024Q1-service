import { ApiProperty } from '@nestjs/swagger';
import { OmitType } from '@nestjs/mapped-types';
import { IsBoolean, IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { Artist } from '../entities/artist.entity';

export class CreateArtistDto extends OmitType(Artist, ['id'] as const) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  grammy?: boolean;
}
