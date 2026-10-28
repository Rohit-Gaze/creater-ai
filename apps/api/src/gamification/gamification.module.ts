import { Module } from '@nestjs/common';
import { DailyRewardService } from './daily-reward.service';
import { GamificationController } from './gamification.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { CoinModule } from '../coin/coin.module';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Module({
    imports: [PrismaModule, CoinModule, AuthModule],
    controllers: [GamificationController],
    providers: [DailyRewardService, JwtAuthGuard],
    exports: [DailyRewardService],
})
export class GamificationModule { }
