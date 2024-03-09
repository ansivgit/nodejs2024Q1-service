import { ApiProperty } from '@nestjs/swagger';
import { OmitType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends OmitType(User, [
  'id',
  'version',
  'createAt',
  'updateAt',
] as const) {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  login: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  password: string;
}
