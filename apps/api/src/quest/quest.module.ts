import { Module } from '@nestjs/common';
import { QuestService } from './quest.service';
import { QuestController } from './quest.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CoinModule } from '../coin/coin.module';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
  imports: [PrismaModule, CoinModule, AuthModule],
  controllers: [QuestController],
  providers: [QuestService, JwtAuthGuard],
})
export class QuestModule {}
