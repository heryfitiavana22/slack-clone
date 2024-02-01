import { Injectable } from '@nestjs/common';
import {
  CreateUserInput,
  FindManyUserInput,
  UpdateUserInput,
} from 'src/graphql';
import { PrismaService } from 'src/prisma.service';
import { FindUserInput } from './dto/create-user-dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: { ...createUserInput } });
  }

  findAll(where: FindManyUserInput) {
    return this.prisma.user.findMany({ where });
  }

  findOne(where: FindUserInput) {
    return this.prisma.user.findFirst({ where });
  }

  findById(id: number) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  update(id: number, updateUserInput: UpdateUserInput) {
    return this.prisma.user.update({
      where: { id },
      data: { ...updateUserInput },
    });
  }

  remove(id: number) {
    return this.prisma.user.delete({ where: { id } });
  }
}
