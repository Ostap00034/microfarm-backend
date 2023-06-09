import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create-request.dto';
export declare class RequestsController {
    private readonly requestsService;
    constructor(requestsService: RequestsService);
    getAll(): Promise<import(".prisma/client").Request[]>;
    getById(id: string): Promise<import(".prisma/client").Request>;
    create(dto: CreateRequestDto): Promise<import(".prisma/client").Request>;
    delete(id: any): Promise<import(".prisma/client").Request>;
}
