import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Injectable()
export class RequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async getAll() {
    return await this.prisma.request.findMany({});
  }

  async getById(id: number) {
    const request = await this.prisma.request.findUnique({ where: { id } });
    if (!request) throw new NotFoundException('Такой запрос не найден.');
    return request;
  }

  async create(dto: CreateRequestDto) {
    return await this.prisma.request.create({ data: { ...dto } });
  }

  async delete(id: number) {
    const object = await this.getById(id);

    return await this.prisma.request.delete({ where: { id } });
  }
}
