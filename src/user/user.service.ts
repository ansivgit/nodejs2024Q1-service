import {
  Injectable,
  NotFoundException,
  ConflictException,
  ForbiddenException,
} from '@nestjs/common';
import { v4 } from 'uuid';
import { DataBase } from 'src/db/db';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly db: DataBase) {}

  create(createUserDto: CreateUserDto): Omit<User, 'password'> {
    const { login, password } = createUserDto;

    const existingUser: User | undefined = this.db.users.find(
      (person) => person.login === login,
    );

    if (existingUser) {
      throw new ConflictException('User exist');
    }

    const userInfo = {
      id: v4(),
      version: 1,
      createAt: Date.now(),
      updateAt: Date.now(),
    };

    const entity = new User({
      login,
      password,
      ...userInfo,
    });

    this.db.users.push(entity);

    const registeredUser: Omit<User, 'password'> = {
      login,
      ...userInfo,
    };

    return registeredUser;
  }

  findAll(): User[] | [] {
    return this.db.users;
  }

  findOne(id: string): User {
    const entity: User | undefined = this.db.users.find(
      (person) => person.id === id,
    );

    if (!entity) {
      throw new NotFoundException('Person not found');
    }

    return entity;
  }

  update(id: string, updateUserDto: UpdateUserDto): void {
    const entity = this.findOne(id);
    const { oldPassword, newPassword } = updateUserDto;

    if (entity.password !== oldPassword) {
      throw new ForbiddenException('Incorrect password');
    }

    entity.password = newPassword;
    console.log(`This action updates a #${id} user`);
  }

  remove(id: string) {
    const entity = this.findOne(id);

    const entityIndex = this.db.users.findIndex(
      (person) => person.id === entity.id,
    );

    this.db.users.splice(entityIndex, 1);
    console.log(`This action removes a #${id} user`);
  }
}
