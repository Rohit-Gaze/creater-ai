import { Global, Module } from '@nestjs/common';
import { CoinService } from './coin.service';
import { CoinController } from './coin.controller';
import { AdRewardController } from './ad-reward.controller';
import { AuthModule } from '../auth/auth.module';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Global()
@Module({
  imports: [AuthModule],
  providers: [CoinService, JwtAuthGuard],
  controllers: [CoinController, AdRewardController],
  exports: [CoinService],
})
export class CoinModule {}
