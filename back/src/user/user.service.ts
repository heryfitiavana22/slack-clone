import { Injectable } from '@nestjs/common';
import {
  CreateUserInput,
  FindManyUserInput,
  UpdateUserInput,
} from 'src/graphql';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: CreateUserInput) {
    return this.prisma.user.create({ data: { ...createUserInput } });
  }

  findAll(where: FindManyUserInput) {
    return this.prisma.user.findMany({ where });
  }

  findOne(id: number) {
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
