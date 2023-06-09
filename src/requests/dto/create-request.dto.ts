import { IsString } from 'class-validator';

export class CreateRequestDto {
  @IsString()
  fio: string;

  @IsString()
  phone: string;

  @IsString()
  description: string;
}
