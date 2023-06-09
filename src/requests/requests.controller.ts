import {
  Controller,
  Get,
  Post,
  HttpCode,
  UsePipes,
  ValidationPipe,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';

@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get()
  async getAll() {
    return this.requestsService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string) {
    return this.requestsService.getById(+id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async create(@Body() dto: CreateRequestDto) {
    return this.requestsService.create(dto);
  }

  @Delete(':id')
  async delete(@Param('id') id) {
    return this.requestsService.delete(+id);
  }
}
