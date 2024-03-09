import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsUUID,
  IsInt,
} from 'class-validator';

export class User {
  @IsString()
  @IsUUID()
  @IsNotEmpty()
  readonly id: string;

  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsOptional()
  password: string;

  @IsInt()
  @IsOptional()
  version: number;

  @IsInt()
  @IsOptional()
  createAt: number;

  @IsInt()
  @IsOptional()
  updateAt: number;

  constructor(user: User) {
    Object.assign(this, user);
  }
}
