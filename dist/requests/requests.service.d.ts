import { PrismaService } from 'src/prisma.service';
import { CreateRequestDto } from './dto/create-request.dto';
export declare class RequestsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAll(): Promise<import(".prisma/client").Request[]>;
    getById(id: number): Promise<import(".prisma/client").Request>;
    create(dto: CreateRequestDto): Promise<import(".prisma/client").Request>;
    delete(id: number): Promise<import(".prisma/client").Request>;
}
