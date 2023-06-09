import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RequestsModule } from './requests/requests.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [RequestsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
