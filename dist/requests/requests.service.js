"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let RequestsService = class RequestsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAll() {
        return await this.prisma.request.findMany({});
    }
    async getById(id) {
        const request = await this.prisma.request.findUnique({ where: { id } });
        if (!request)
            throw new common_1.NotFoundException('Такой запрос не найден.');
        return request;
    }
    async create(dto) {
        return await this.prisma.request.create({ data: Object.assign({}, dto) });
    }
    async delete(id) {
        const object = await this.getById(id);
        return await this.prisma.request.delete({ where: { id } });
    }
};
RequestsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RequestsService);
exports.RequestsService = RequestsService;
//# sourceMappingURL=requests.service.js.map